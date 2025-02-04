import { SequelizeModuleOptions } from "@nestjs/sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

export const connectorOptions: SequelizeModuleOptions = {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    autoLoadModels: true,
    synchronize: true,
    retryAttempts: 2,
    logging: false,
}