//Main
import React from 'react';
import { connect } from 'react-redux';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import SearchBoxContact from '../../containers/SearchBoxContact';

//material ui
import CircularProgress from 'material-ui/CircularProgress';

//actions
import { getContactsListThunk } from '../../actions/contacts';

class MainContacts extends React.Component {

  componentWillMount() {
    // if (this.props.categories.categoryList === null )
    //   this.props.dispatch(getCategoryList())
    //     .then(res => {
    //       if (this.props.categories.currentCategory === null) this.props.dispatch(saveCurrentCategory(null));
    //     });
  }

  render () {
    const contacts = this.props.contacts;
    if (contacts === null)
          return <CircularProgress size={60} thickness={7}/>;
    return <div>
      <Header />
      <div style={style.wrapper}>
        <SearchBoxContact />

      </div>
      <Footer />
    </div>
  }

}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  };
}

export default connect(mapStateToProps)(MainContacts);;
