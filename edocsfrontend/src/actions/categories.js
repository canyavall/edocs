import { defaultFecthGet } from './defaultFetch';
import { GET_CATEGORIES, GET_CATEGORY, SAVE_CURRENT_CATEGORY} from './defaultActionConstants';


export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    content: categories
  }
}

export const getCategory = (transactions) => {
  return {
    type: GET_CATEGORY,
    content: transactions
  }
}

export const saveCurrentCategory = (categoryId) => {
  return {
    type: SAVE_CURRENT_CATEGORY,
    content: categoryId
  }
}
export const getCategoryList = () => {
  return defaultFecthGet(getCategories,"http://localhost:8080/categories", "GET");
}

export const getCategoryinfo = (id) => {
  return defaultFecthGet(getCategory,"http://localhost:8080/categories/"+id, "GET");
}
