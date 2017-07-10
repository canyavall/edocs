import { GET_CURRENTUSER, LOGOUT_CURRENTUSER} from '../../actions/defaultActionConstants';

const initialUser = {
  "id": null,
  "name": null,
  "surname": null,
  "identityNumber": null,
  "isCompany": null,
  "email": null,
  "language": null,
  "token": null
};

const currentuser = (state = initialUser, action) => {
  switch (action.type) {

    case GET_CURRENTUSER:
      const newState = { ...state }
      newState.id = action.content.id;
      newState.token = action.content.token;
      newState.name = action.content.name;
      newState.surname = action.content.surname;
      newState.email = action.content.email;
      newState.identityNumber = action.content.identityNumber;
      newState.isCompany = action.content.isCompany;
      newState.language = action.content.language;
      return newState;

    case LOGOUT_CURRENTUSER:
      return {
        "id": null,
        "name": null,
        "surname": null,
        "identityNumber": null,
        "isCompany": null,
        "email": null,
        "language": null,
        "token": null
      };

    default:
      return state;
  }
}

export default currentuser;
