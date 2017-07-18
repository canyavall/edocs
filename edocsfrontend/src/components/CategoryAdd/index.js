//Main
import React from 'react';
import { style } from './style';

//Material ui
import Settings from 'material-ui/svg-icons/action/settings-applications';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

//utils
import { blackcolor } from '../../utils/constants'

//Components and Containers
import CategorySimpleList from '../../components/CategorySimpleList';


export default class CategoryAdd extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Accept"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div style = {{display: 'inline-block'}}>
        <Settings style= { style.settingsIconStyle } hoverColor={blackcolor} onTouchTap={this.handleOpen} />
        <Dialog
          title="Categories"
          actions={ actions }
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Divider style = { style.dividerStyle }/>
          <input type="button" value="Create new Category" style = { style.newCategoryButton }/>
          <Divider style = { style.dividerStyle }/>
          <CategorySimpleList categoryList = { this.props.categoryList} />
          <Divider style = { style.dividerStyle }/>
        </Dialog>
      </div>
    );
  }
}
