import find from 'lodash/find';
import { GET_CATEGORIES, GET_CATEGORY, SAVE_CURRENT_CATEGORY} from '../../actions/defaultActionConstants';


const initialState = {
  "currentCategory": null,
  "categoryList": null
}
const currentuser = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {

    case GET_CATEGORIES:
      newState.categoryList = action.content;
      return newState;

    case GET_CATEGORY:
      for (var category in newState.categoryList) {
        if (newState.categoryList[category].id === newState.currentCategory){
          newState.categoryList[category].transactions = action.content.transactions
          break;
        }
      }
      return newState;

    case SAVE_CURRENT_CATEGORY:
      newState.currentCategory = (action.content != null) ? action.content : find(newState.categoryList, ['isGeneral', true]).id;
      return newState;

    default:
      return state;
  }
}

export default currentuser;
