import { defaultFecthGet } from './defaultFetch';
import { GET_CONTACTS } from './defaultActionConstants';

export const getContactsAction = (contacts) => {
  return {
    type: GET_CONTACTS,
    content: contacts
  }
}

export const getContactsListThunk = () => {
  return defaultFecthGet(getContactsAction,"/contacts", "GET");
}
