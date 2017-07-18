//Main
import React from 'react';
import { connect } from 'react-redux';

//Components and Containers
import CategoryAddComponent from '../../components/CategoryAdd';

class CategoryAdd extends React.Component {
  state = {
    open: false,
  };

  saveCategory = () => {
    console.log(document.getElementById('newCategory').value);
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
