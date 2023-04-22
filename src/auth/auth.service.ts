import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class AuthService {
  async validateOAuthLogin(accessToken: string): Promise<any> {
    const userInfo = await axios.get('https://portal.ncu.edu.tw/apis/oauth/v1/info', {
      headers: {
        Authorization: `${accessToken}`,
        Accept: 'application/json',
      },
    });
    return userInfo.data;
  }
}