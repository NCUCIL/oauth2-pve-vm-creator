import { PassportStrategy } from "@nestjs/passport";
import { Res,BadRequestException,Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Strategy, VerifyCallback } from 'passport-oauth2';
import { HttpService } from '@nestjs/axios';
import { PortalUser } from './dto/portal-user.dto'
import { Response } from 'express';
import { UserService } from '../user/user.service';

@Injectable()
export class OAuth2Strategy  extends PassportStrategy(Strategy, 'oauth2'){
    constructor(
      private readonly httpService: HttpService,
      private readonly userService: UserService,
    ){
        super({
            authorizationURL: process.env.PORTAL_OAUTH_AUTHORIZATION_URL,
            tokenURL: process.env.PORTAL_OAUTH_TOKEN_URL,
            clientID : process.env.PORTAL_OAUTH_ID,
            clientSecret: process.env.PORTAL_OAUTH_SECRET,
            callbackURL: process.env.PORTAL_OAUTH_CALLBACK_URL,
            scope: [ 'identifier','student-id','email' ]
        });
    }

    userProfile(
        accessToken: string,
        done: (err?: Error | null,portalUser?: PortalUser) => void,
    ): void {
      console.log(`Requesting user info with access token: ${accessToken}`);
        firstValueFrom(
            this.httpService.get('https://portal.ncu.edu.tw/apis/oauth/v1/info', {
                    headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: 'application/json',
                },
            }),
        )
        .then((res) => {
          console.log(`Received user info: ${JSON.stringify(res.data)}`);
          done(null, res.data);
        })
        .catch((err) => {
          console.error(`Failed to get user info: ${err}`);
          done(err, null!);
        });
        }

        async validate(
          accessToken: string,
          refreshToken: string,
          portalUser: PortalUser,
        ) {
          console.log(`Validating user: ${JSON.stringify(portalUser)}`);
          let user = await this.userService.getUserByPortalId(portalUser.studentId);
          console.log(`Existing user: ${JSON.stringify(user)}`);
          console.log(`User does not exist: ${!user}`);
          if (!user) {
            if (!(portalUser.identifier &&portalUser.email && portalUser.studentId))
              throw new BadRequestException(
                'Missing required fields (need id, identifier and studentId), get: ' +
                  JSON.stringify(portalUser),
              );
            user = await this.userService.createUser(
            portalUser.identifier,
            portalUser.email,
            portalUser.studentId,
            );
          }
          return user;
        }

}