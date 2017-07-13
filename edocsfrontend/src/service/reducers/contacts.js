import { GET_CONTACTS } from '../../actions/defaultActionConstants';


const contacts = (state = null, action) => {
  switch (action.type) {

    case GET_CONTACTS:
      const contacts = action.content.contacts;
      const currentGeneralCategoryId = action.content.currentGeneralCategoryId;
      let contactList = [];
      console.log(contacts);
      for (let i = 0; i < contacts.length; i++) {
        let newContact = {};
        newContact['id'] = contacts[i].id;
        if (contacts[i].originCategory.id === currentGeneralCategoryId){
          newContact['targetName'] = contacts[i].targetCategory.user.name + " " + contacts[i].targetCategory.user.surname;
          newContact['targetCategoryId'] = contacts[i].originCategory.id;
          newContact['targetCategoryName'] = contacts[i].originCategory.name;
          newContact['sendStatus'] = contacts[i].originStatus;
          newContact['receiveStatus'] = contacts[i].targetStatus
        }else{
          newContact['targetName'] = contacts[i].originCategory.user.name + " " + contacts[i].originCategory.user.surname;
          newContact['targetCategoryId'] = contacts[i].targetCategory.id;
          newContact['targetCategoryName'] = contacts[i].targetCategory.name;
          newContact['sendStatus'] = contacts[i].targetStatus;
          newContact['receiveStatus'] = contacts[i].originStatus
        }
        contactList.push(newContact);
      }
      return contactList;

    default:
      return state;
  }
}

export default contacts;
