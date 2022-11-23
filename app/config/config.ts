import { config } from 'dotenv';
config();

const configuration = {
  appname: 'TodoAPIService',
  mongo: {
    uri: process.env.DATABASE,
  },
  web: {
    port: process.env.PORT || '8001',
    jwt_secret: process.env.JWT_SECRET || 'mservice@10381.C03',
    header_name: process.env.HEADER_NAME || 'auth-token',
    userServiceUrl:
      process.env.USER_SERVICE_URL || 'http://localhost:8001',
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
    db: parseInt(process.env.REDIS_DB) || 0,
  },
};

export default configuration;
