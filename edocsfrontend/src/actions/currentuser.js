import { GET_CURRENTUSER, LOGOUT_CURRENTUSER } from './defaultActionConstants';


export const loginCurrentUser = (user) => {
  return {
    type: GET_CURRENTUSER,
    content: user
  }
}

export const userLogout = () => {
  return { type: LOGOUT_CURRENTUSER }
}

export const checkLogin = ({ identityNumber, password }) => (dispatch, getState) => {
  const headers = { 'Accept': 'application/json',
                    'Content-type': 'application/json'
                  }
  const body = { identityNumber, password }
  const config = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  };
  console.log(config);
  return fetch("http://localhost:8080/security/login", config)
    .then(res => {
      if (res.status === 200) return res.json();
        return res.status;
    })
    .then(user => {
      if (user !== false){
        localStorage.setItem('userToken', user.token);
        localStorage.setItem('userId', user.token);
        const action = loginCurrentUser(user);
        dispatch(action);
      }
    })
    .catch(err => {
          console.log('error: ', err);
      });
}
