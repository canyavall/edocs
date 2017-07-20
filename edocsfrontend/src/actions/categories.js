import { defaultFecthGet } from './defaultFetch';
import { GET_CATEGORIES,
         GET_CATEGORY,
         SAVE_CURRENT_CATEGORY,
         CREATE_CATEGORY
       } from './defaultActionConstants';


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

export const createCategoryAction = (category) => {
  return {
    type: CREATE_CATEGORY,
    content: category
  }
}

export const getCategoryList = () => {
  return defaultFecthGet(getCategories,"/categories", "GET");
}

export const getCategoryinfo = (id) => {
  return defaultFecthGet(getCategory,"/categories/"+id, "GET");
}

export const createNewCategoryThunk = (name) => {
  const body = { 'name': name }
  return defaultFecthGet(createCategoryAction, "/categories/create", "POST", body)
}
