import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from '@nestjs/common';
import { Strategy, StrategyOptions, VerifyCallback } from 'passport-oauth2';

@Injectable()
export class PortalStrategy extends PassportStrategy(Strategy, 'oauth2'){
    constructor(){
        super({
            authorizationURL: process.env.PORTAL_OAUTH_AUTHORIZATION_URL,
            tokenURL: process.env.PORTAL_OAUTH_TOKEN_URL,
            clientID : process.env.PORTAL_OAUTH_ID,
            clientSecret: process.env.PORTAL_OAUTH_ID,
            callbackURL: process.env.PORTAL_OAUTH_CALLBACK_URL,
            scope: [ 'identifier','student-id','email' ]
        } as StrategyOptions);
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
        ): Promise<any> {
        const user = await this.authService.validateOAuthLogin(accessToken);
        if (!user) {
            done('Unauthorized', false);
        }
        done(null, user);
    }
}