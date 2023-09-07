import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { HttpModule } from "@nestjs/axios";
import { OAuth2Strategy } from "./oauth2.strategy";
import { SessionSerializer } from "./session.serializer";

@Module({
  controllers: [AuthController],
  imports: [UserModule, PassportModule.register({ session: true }), HttpModule],
  providers: [AuthService, OAuth2Strategy, SessionSerializer],
})
export class AuthModule {}
