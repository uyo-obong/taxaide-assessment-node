import { config } from 'dotenv';
config();

const configuration = {
  appname: 'FileMagentoService',
  mongo: {
    uri: process.env.DATABASE,
  },
  web: {
    port: process.env.PORT || '8089',
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
    db: parseInt(process.env.REDIS_DB) || 0,
  },
};

export default configuration;
