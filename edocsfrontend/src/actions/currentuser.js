import { defaultFecthGet } from './defaultFetch';
import { GET_CURRENTUSER, LOGOUT_CURRENTUSER, GET_CURRENTUSER_INFO } from './defaultActionConstants';

export const loginCurrentUserAction = (user) => {
  return {
    type: GET_CURRENTUSER,
    content: user
  }
}

export const userLogoutAction = () => {
  return { type: LOGOUT_CURRENTUSER }
}

export const getUserInfoAction = (user) => {
  return {
    type: GET_CURRENTUSER_INFO,
    content: user
  }
}

export const checkLoginThunk = ({ identityNumber, password }) => {
  const body = { identityNumber, password };
  return defaultFecthGet(loginCurrentUserAction,"/user/login", "POST", body);
}
