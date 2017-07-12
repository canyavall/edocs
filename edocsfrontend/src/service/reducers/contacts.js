import { GET_CONTACTS } from '../../actions/defaultActionConstants';


const contacts = (state = null, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_CONTACTS:
      newState = action.content;
      return newState;

    default:
      return state;
  }
}

export default contacts;
