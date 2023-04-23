import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';

let envFilePath = '.env.development';
console.log(`Running in ${process.env.ENVIROMENT}`)
if (process.env.ENVIROMENT='PRODUCTION'){
  envFilePath = '.env.production';
}else if(process.env.ENVIROMENT='TEST'){
  envFilePath = '.env.testing';
  }


@Module({
  imports: [AuthModule,
    ConfigModule.forRoot({ envFilePath: '.env.development', isGlobal: true }),
    PassportModule.register({ session: true }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.MYSQL_DB_HOST,
    port: Number.parseInt(process.env.MYSQL_DB_PORT),
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    entities: [User],
    synchronize: true,
  }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
