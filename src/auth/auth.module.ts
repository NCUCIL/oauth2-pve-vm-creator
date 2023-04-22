import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { PortalStrategy } from './auth.strategy';

@Module({
  controllers: [AuthController],
  imports: [ PassportModule ],
  providers: [
    AuthService, PortalStrategy
  ]
})
export class AuthModule {}
