//Main
import React from 'react';
import { connect } from 'react-redux';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer'

//material ui
import CircularProgress from 'material-ui/CircularProgress';

//actions
import { getCategoryList } from '../../actions/categories';
class Inbox extends React.Component {

  componentWillMount() {
    if (this.props.categories.categoryList === null ){
      this.props.dispatch(getCategoryList());
    } else {

    }
  }

  render () {
    console.log(this.props);
    if (this.props.categories.categoryList === null ) return <CircularProgress size={60} thickness={7}/>;
    return <div>
      <Header />
      <div >
        <h1 style={style.greyTitle}>All your documents in one click</h1>
      </div>
      <div style={style.wrapper}>
      welcome to the inbox!!!
      </div>
      <Footer />
    </div>
  }

}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps)(Inbox);;
