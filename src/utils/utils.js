const TRUE_LOGIN = 'developer21';
const TRUE_PASSWORD = '123456';

const Utils = {
  verifyAuthorization: (login, password) => {
    if (login === TRUE_LOGIN && password === TRUE_PASSWORD) {
      return true;
    }
    return false;
  }
};

export default Utils;