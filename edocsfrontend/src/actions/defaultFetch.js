/**
 * Default function to call the fetch data when currentuser token is required
 * @param  {[action]} action [action to be executed]
 * @param  {[url]} url    [url for the fetch]
 * @return {[int]}        [Returns the error code]
 */
export const defaultFecthGet = (action, url, method, body) => (dispatch, getState) => {
  // const token = getState().currentuser.token;
  // let config = {
  //   method: method,
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // };
  const userId = getState().currentuser.id;
  const finalUrl = "http://localhost:8080"+url;
  let config = {
    method: method,
    headers: {
      userId: userId
    }
  };

  if (body){
    config.body = JSON.stringify(body);
    config.headers['Content-type'] = 'application/json';
  }

  return fetch(finalUrl, config)
    .then(res => {
      if (res.status === 200) return res.json();
        return res.status;
    })
    .then(obj => {
      if (obj instanceof Object){

        //For some actions we need to do some more things
        switch (action.name) {

          case "getContactsAction":
            let generalCategory = null;
            getState().categories.categoryList.forEach((category)=> (category.isGeneral) ? generalCategory = category.id : "");
            dispatch(action(obj, generalCategory));
            break;

          case "loginCurrentUserAction":
            localStorage.setItem('userToken', obj.token);
            localStorage.setItem('userId', obj.id);
            localStorage.setItem('userName', obj.name);
            localStorage.setItem('userSurname', obj.surname);
            dispatch(action(obj));
            break;

          default:
            dispatch(action(obj));
        }
      }
    })
    .catch(err => {
          console.log('error: ', err);
      });
}
