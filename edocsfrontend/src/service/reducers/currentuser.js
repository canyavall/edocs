import { GET_CURRENTUSER, LOGOUT_CURRENTUSER} from '../../actions/defaultActionConstants';

const initialUser = {
  "id": null,
  "token": null,
  "name": null,
  "surname": null,
  "email": null
};

const currentuser = (state = initialUser, action) => {
  switch (action.type) {

    case GET_CURRENTUSER:
      const newState = { ...state }
      newState.token = action.content.token;
      newState.name = action.content.name;
      newState.surname = action.content.surname;
      newState.email = action.content.email;
      return newState;

    case LOGOUT_CURRENTUSER:
      return {
        "id": null,
        "token": null,
        "name": null,
        "surname": null,
        "email": null
      };

    default:
      return state;
  }
}

export default currentuser;
