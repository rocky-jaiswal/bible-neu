const defaultConfiguration = {};

const environmentConfiguration = (environment: string) => {
  const defaultConf = defaultConfiguration;

  if (environment === 'development') {
    return Object.assign(defaultConf, {
      baseURL: `http://${window.location.hostname}:3001`
    });
  }
  return Object.assign(defaultConf, {
    baseURL: `http://${window.location.hostname}:3001`
  });
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
