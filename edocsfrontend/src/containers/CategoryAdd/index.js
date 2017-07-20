//Main
import React from 'react';
import { connect } from 'react-redux';

//Components and Containers
import CategoryAddComponent from '../../components/CategoryAdd';

//Actions
import { createNewCategoryThunk } from '../../actions/categories'
class CategoryAdd extends React.Component {
  state = {
    open: false,
  };

  saveCategory = () => {
    this.props.dispatch(createNewCategoryThunk(document.getElementById('newCategory').value))
  };

  render() {
    return (
      <div>
        <CategoryAddComponent saveCategory = { this.saveCategory} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentuser: state.currentuser
  };
}

export default connect(mapStateToProps)(CategoryAdd);
