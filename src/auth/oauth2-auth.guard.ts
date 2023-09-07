import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class OAuth2AuthGuard extends AuthGuard("oauth2") {
  async canActivate(context: ExecutionContext): Promise<any> {
    const activate = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return activate;
  }
}
