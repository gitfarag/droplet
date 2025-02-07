// config/config.js

const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

module.exports = {
  development: {
    dialect: 'mysql',
    host: process.env.MYSQL_MIGRATION_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'database_dev',
    autoLoadModels: true,
    synchronize: true,
    retryAttempts: 2,
  },
  production: {
    dialect: 'mysql',
    host: process.env.MYSQL_MIGRATION_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'database_dev',
    autoLoadModels: true,
    synchronize: true,
    retryAttempts: 2,
  },
  test: {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: null,
    database: 'database_test',
    port: 3306,
  },
};
