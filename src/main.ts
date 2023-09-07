import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.use(
    session({
      cookie: {
        maxAge: 86400000,
      },
      secret: "my-secret",
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
}
bootstrap();
