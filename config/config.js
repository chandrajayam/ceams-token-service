const environment = 'sbx';

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    SVNYT_SERVICES_URL:
        process.env.ADMIN_SERVICES_URL || 'ssm-poc-alcor.saviyntcloud.com',
    LOGIN_ENDPOINT: '/ECM/api/login',
    MORGAN_LOGGING_FORMAT: process.env.MORGAN_LOGGING_FORMAT || 'dev',
    DEFAULT_LOGGING_LEVEL: process.env.DEFAULT_LOGGING_LEVEL || 'info'
   };
