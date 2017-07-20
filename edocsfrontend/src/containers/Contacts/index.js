//Main
import React from 'react';
import { connect } from 'react-redux';

//Components & Containers
import ContactsComponent from '../../components/Contacts';

//actions
import { getContactsListThunk } from '../../actions/contacts';
import { getCategoryList } from '../../actions/categories';

const loader = (<div>
                      LOADING
                </div>);

class Contacts extends React.Component {

  componentWillMount() {
    if (this.props.categories.categoryList === null ){
      this.props.dispatch(getCategoryList())
        .then(res => {
          this.props.dispatch(getContactsListThunk());
        });
    }else{
      this.props.dispatch(getContactsListThunk());
    }
  }

  render () {
    const contacts = this.props.contacts;
    if (contacts === null || contacts === undefined)
          return loader;
    return <ContactsComponent contacts = { contacts }/>
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    categories: state.categories
  };
}

export default connect(mapStateToProps)(Contacts);
