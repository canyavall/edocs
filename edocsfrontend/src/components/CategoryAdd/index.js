//Main
import React from 'react';
import { style } from './style';

//Material ui
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

class CategoryAdd extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSaveAndClose = () => {
    this.props.saveCategory(document.getElementById('newCategory').value)
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Accept"
        keyboardFocused={true}
        onTouchTap={this.handleSaveAndClose}
      />,
      <FlatButton
        label="Cancel"
        keyboardFocused={false}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div style = {{display: 'inline-block', width: "100%"}}>
        <input type="button" value="Create new Category" style = { style.newCategoryButton } onTouchTap={this.handleOpen}/>
        <Dialog
          title="Add Category"
          actions={ actions }
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Divider style = { style.dividerStyle }/>
          <input id="newCategory" type="text" placeholder="Category Name" />
          <Divider style = { style.dividerStyle }/>
        </Dialog>
      </div>
    );
  }
}

export default CategoryAdd;
