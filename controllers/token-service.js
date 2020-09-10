const https = require('https');
const config = require('../config/config');
const { logger, LoggingLevels } = require('../config/winston');

/**
 * Service method to get token for a context from Saviynt
 * @param {*} account
 */
const getTokenService = account => {
  logger.log(
    LoggingLevels.INFO,
    'Token Service: Request to get Token from Saviynt for ',
  );
  const options = {
    hostname: `${config.SVNYT_SERVICES_URL}`,
    path: `${config.LOGIN_ENDPOINT}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': JSON.stringify(account).length,
    },
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
  };
  return new Promise((resolve, reject) => {
    const httpsReq = https.request(options, response => {
      let result = '';
      response.on('data', chunk => {
        result += chunk;
      });
      response.on('end', () => {
        logger.log(
          LoggingLevels.INFO,
          'Token Service: Promise resolved from Saviynt',
        );
        resolve(result);
      });
      response.on('error', err => {
        logger.log(
          LoggingLevels.ERROR,
          'Token Service: Promise rejected from Saviynt',
        );
        reject(err);
      });
    });

    httpsReq.write(JSON.stringify(account));
    httpsReq.end();
  });
};

module.exports = {
  getTokenService,
};
