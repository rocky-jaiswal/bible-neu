const Config = {
  env: {
    baseURL: window.location.hostname === 'localhost' ?
      `http://${window.location.hostname}:${window.location.port}/json` :
      `https://bible-neu.firebaseapp.com/json`
  }
};

export default Config;
