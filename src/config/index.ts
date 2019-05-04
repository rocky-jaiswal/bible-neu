const environmentConfiguration = (environment: string) => {

  if (environment === 'development') {
    return {
      baseURL: `http://${window.location.hostname}:8080/graphql`
    };
  }
  return {
    baseURL: `https://api.bible-neu.live/graphql`
  };
};

const Config = {
  env: environmentConfiguration(process.env.REACT_APP_ENVIRONMENT || 'development')
};

export default Config;
