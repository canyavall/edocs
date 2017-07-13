import { defaultFecthGet } from './defaultFetch';
import { GET_CONTACTS } from './defaultActionConstants';

export const getContactsAction = (contacts, currentGeneralCategoryId) => {
  return {
    type: GET_CONTACTS,
    content: {contacts, currentGeneralCategoryId}
  }
}

export const getContactsListThunk = () => {
  return defaultFecthGet(getContactsAction,"/contacts", "GET");
}
