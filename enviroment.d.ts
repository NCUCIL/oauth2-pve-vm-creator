declare namespace NodeJS{
    export interface ProcessEnv{
        MYSQL_DB_HOST?: string;
        MYSQL_DB_PORT?: string;
        MYSQL_DB_USER?: string;
        MYSQL_DB_PASS?: string;
        MYSQL_DB_NMAE?: string;
        PORT?: string
        ENVIROMENT : Enviroment;
        PORTAL_OAUTH_ID?: string
        PORTAL_OAUTH_SECRET?: string
        PORTAL_OAUTH_CALLBACK_URL?: string
        PORTAL_OAUTH_AUTHORIZATION_URL?: string
        PORTAL_OAUTH_TOKEN_URL?: string
    }
    export type Enviroment = 'DEVELOPMENT' | "PRODUCTION" | "TEST";
}