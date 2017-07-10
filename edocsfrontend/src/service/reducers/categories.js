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
      for (var category in newState) {
        if (newState.category === action.content.categoryId){
          newState.category.transactions = action.content.transactions
          break;
        }
      }
      return newState;

    case SAVE_CURRENT_CATEGORY:
      newState.currentCategory = action.content;
      return newState;

    default:
      return state;
  }
}

export default currentuser;
