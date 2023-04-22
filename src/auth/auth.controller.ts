import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(AuthGuard('oauth2'))
  login() {
    return;
  }

  @Get('callback')
  @UseGuards(AuthGuard('oauth2'))
  redirect(@Res() res: Response) {
    console.log(res);
  }
}