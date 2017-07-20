//Main
import React from 'react';
import { connect } from 'react-redux';

//Components & Containers
import CategoriesComponent from '../../components/Categories';

//material ui
import CircularProgress from 'material-ui/CircularProgress';

//actions
import { getCategoryList,
         saveCurrentCategory,
         getCategoryinfo
        } from '../../actions/categories';

class Categories extends React.Component {

  componentWillMount() {
    //Check we have the categories, if we don't ask the server
    //then, check if we have a currecntCategory, if not, set as default the general
    //then get the transactions for this category
    if (this.props.categories.categoryList === null || this.props.categories.currentCategory === null)
      this.props.dispatch(getCategoryList())
        .then(res => {
          if (this.props.categories.currentCategory === null)
            this.props.dispatch(saveCurrentCategory(null));
        });

  }

  //Function that change the currentcatergoy for the one clocked on
  changeCurrentCategory = (categoryId) => {
    this.props.dispatch(saveCurrentCategory(categoryId));
  }

  //Get the category info
  categoryInfo = () => {
    this.props.dispatch(getCategoryinfo(this.props.categories.currentCategory));
  }

  render () {
    const categories = this.props.categories;
    if (categories.categoryList === null && categories.currentCategory === null)
          return <CircularProgress size={60} thickness={7}/>;
    return <CategoriesComponent categories={ categories }
                                isArchive = { this.props.isArchive }
                                changeCurrentCategory = { this.changeCurrentCategory }
                                categoryInfo = { this.categoryInfo }
                                />
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps)(Categories);
