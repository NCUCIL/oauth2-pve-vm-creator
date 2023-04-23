import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { User } from '../user/entities/user.entity'

@Injectable()
export class SessionSerializer extends PassportSerializer{

    serializeUser(user: User, done: (err: Error, user: User) => void) {
        done(null!, user);
    }
    deserializeUser(payload: any, done: (err: Error, payload: string) => void) {
        done(null!, payload);
    }
}