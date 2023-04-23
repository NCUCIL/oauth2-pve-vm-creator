import { PassportStrategy } from "@nestjs/passport";
import { Res, BadRequestException,Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Strategy, VerifyCallback } from 'passport-oauth2';
import { HttpService } from '@nestjs/axios';
import { PortalUser } from './dto/portal-user.dto'
import {Response } from 'express';

@Injectable()
export class PortalStrategy extends PassportStrategy(Strategy, 'oauth2'){
    constructor(
      private readonly httpService: HttpService,
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
        done: (err?: Error | null, profile?: any) => void,
    ): void {
        firstValueFrom(
            this.httpService.get('https://portal.ncu.edu.tw/apis/oauth/v1/info', {
                    headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: 'application/json',
                },
            }),
        )
          .then((res) => done(null, res.data))
            .catch((err) => done(err, null));
        }

        async validate(
          // accessToken: string,
          // refreshToken: string,
          // profile: PortalUser,
          @Res() res: Response
        ) {
          // let user = await this.userService.getUserByPortalId(profile.id);
          // if (!user) {
          //   if (!(profile.id && profile.identifier && profile.studentId))
          //     throw new BadRequestException(
          //       'Missing required fields (need id, identifier and studentId), get: ' +
          //         JSON.stringify(profile),
          //     );
          //   user = await this.userService.createUser(
          //     profile.id,
          //     profile.identifier,
          //     profile.studentId,
          //   );
          // }
          // return user;
          return 200;
        }

}