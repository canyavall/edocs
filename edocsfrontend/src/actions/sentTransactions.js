import { GET_SENT_TRANSACTIONS } from './defaultActionConstants';
import { defaultFecthGet } from './defaultFetch';

export const getSentTransactionsAction = (categories) => {
  return {
    type: GET_SENT_TRANSACTIONS,
    content: categories
  }
}

export const getSentTransactionsThunk = (id) => {
  return defaultFecthGet(getSentTransactionsAction,"/user/sent/"+id, "GET");
}
