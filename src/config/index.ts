const defaultConfiguration = {};

const environmentConfiguration = (environment: string) => {
  const defaultConf = defaultConfiguration;

  if (environment === 'development') {
    return Object.assign(defaultConf, {
      baseURL: `http://${window.location.hostname}:8000/json`
    });
  }
  return Object.assign(defaultConf, {
    baseURL: `http://${window.location.hostname}/json`
  });
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
