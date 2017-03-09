import environment from './environment';
import authConfig from 'authConfig';

//Configure Bluebird Promises.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.use
    .plugin('aurelia-api', configure => {
      configure
        .registerEndpoint('auth', 'http://localhost:57174');
        //.registerEndpoint('protected-api', 'https://myapi.org/protected-api')
        //.registerEndpoint('public-api', 'http://myapi.org/public-api');
    })
    .plugin('aurelia-authentication', baseConfig => {
        baseConfig.configure(authConfig);
    });

  aurelia.start().then(() => aurelia.setRoot());
}
