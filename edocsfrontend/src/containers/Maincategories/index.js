//Main
import React from 'react';
import { connect } from 'react-redux';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import SearchBox from '../../containers/SearchBox';
import Categories from '../../containers/Categories';

//material ui
import CircularProgress from 'material-ui/CircularProgress';

//actions
import { getCategoryList,
         saveCurrentCategory,
         getCategoryinfo } from '../../actions/categories';

class Inbox extends React.Component {

  componentWillMount() {
    //Check we have the categories, if we don't ask the server
    //then, check if we have a currecntCategory, if not, set as default the general
    //then get the transactions for this category
    if (this.props.categories.categoryList === null )
      this.props.dispatch(getCategoryList())
        .then(res => {
          if (this.props.categories.currentCategory === null) this.props.dispatch(saveCurrentCategory(null));
        }).then(res => {
          this.props.dispatch(getCategoryinfo(this.props.categories.currentCategory));
        });
  }

  render () {
    const categories = this.props.categories;
    if (categories.categoryList === null && categories.currentCategory === null)
          return <CircularProgress size={60} thickness={7}/>;
    return <div>
      <Header />
      <div style={style.wrapper}>
        <SearchBox />
        <Categories categories={ categories } isArchive = { this.props.isArchive }/>
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