import { defaultFecthGet } from './defaultFetch';
import { GET_CURRENTUSER, LOGOUT_CURRENTUSER } from './defaultActionConstants';

export const loginCurrentUserAction = (user) => {
  return {
    type: GET_CURRENTUSER,
    content: user
  }
}

export const userLogoutAction = () => {
  return { type: LOGOUT_CURRENTUSER }
}

export const checkLoginThunk = ({ identityNumber, password }) => {
  const body = { identityNumber, password };
  return defaultFecthGet(loginCurrentUserAction,"/user/login", "POST", body);
}

export const getUserInformationThunk = (token) => {
  return defaultFecthGet(loginCurrentUserAction,"/user/profile/"+token, "GET");
}
