//Main
import React from 'react';
import { connect } from 'react-redux';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import SearchBoxContact from '../../containers/SearchBoxContact';
import ContactFrame from '../../components/ContactFrame';

//material ui
import Paper from 'material-ui/Paper';

//actions
import { getContactsListThunk } from '../../actions/contacts';
import { getCategoryList } from '../../actions/categories';

const loader = (<div>
                  <Header />
                  <div style={style.wrapper}>
                    <SearchBoxContact />
                    <Paper style = { style.paperStyle }>
                      LOADING
                    </Paper>
                  </div>
                  <Footer />
                </div>);

class MainContacts extends React.Component {

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
    console.log(this.props);
    const contacts = this.props.contacts;
    if (contacts === null || contacts === undefined)
          return loader;
    return <div>
            <Header />
            <div style={style.wrapper}>
              <SearchBoxContact />
              <ContactFrame contacts = { contacts }/>
            </div>
            <Footer />
          </div>
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    categories: state.categories
  };
}

export default connect(mapStateToProps)(MainContacts);;
