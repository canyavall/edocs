import find from 'lodash/find';
import { GET_SENT_TRANSACTIONS } from '../../actions/defaultActionConstants';


const currentuser = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {

    case GET_SENT_TRANSACTIONS:
      newState.categoryList = action.content;
      return newState;

    default:
      return state;
  }
}

export default currentuser;
