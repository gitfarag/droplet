import * as dotenv from 'dotenv';
dotenv.config();
export class AppConstants {
    static readonly BASICURL = 'api/v1/';
    static readonly SALT = Number(process.env.SALT)
}