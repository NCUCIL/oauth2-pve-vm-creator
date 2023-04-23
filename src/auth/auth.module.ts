import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { HttpModule } from '@nestjs/axios';
import { PortalStrategy } from './auth.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  controllers: [AuthController],
  imports: [ 
    PassportModule.register({ session: true }),
    HttpModule],
  providers: [
    AuthService, PortalStrategy,SessionSerializer
  ]
})
export class AuthModule {}
