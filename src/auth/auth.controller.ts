import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(AuthGuard('oauth2'))
  async login(@Res() res: Response) {
    res.redirect('/');
  }

  @Get('callback')
  @UseGuards(AuthGuard('oauth2'))
  async redirect(@Res() res: Response) {
    res.send(200);
  }
}