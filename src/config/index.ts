const environmentConfiguration = (environment: string) => {

  if (environment === 'development') {
    return {
      baseURL: `http://${window.location.hostname}:8080`
    };
  }
  return {
    baseURL: `https://bible-api-wkjklnuxia-uc.a.run.app`
  };
};

const Config = {
  env: environmentConfiguration(process.env.REACT_APP_ENV || 'development')
};

export default Config;
