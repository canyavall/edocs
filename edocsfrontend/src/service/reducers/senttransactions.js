import { GET_SENT_TRANSACTIONS } from '../../actions/defaultActionConstants';


const currentuser = (state = null, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_SENT_TRANSACTIONS:
      newState = action.content;
      return newState;

    default:
      return state;
  }
}

export default currentuser;
