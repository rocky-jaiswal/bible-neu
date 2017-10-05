const environmentConfiguration = (environment: string) => {
  const config = {
    development: {
      baseURL: `http://${window.location.hostname}:8000/json`
    },
    production: {
      baseURL: `https://bible-neu.firebaseapp.com/json`
    }
  };

  return config[environment];
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
