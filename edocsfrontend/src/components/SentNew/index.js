//Main
import React from 'react';
import { style } from './style';
import Dropzone from 'react-dropzone'

//Material ui
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

class SentNew extends React.Component {
  state = {
    open: false,
    userType: 1,
    targetUserId: null,
    isSigned: null,
    requestSignature: null,
    subject:null,
    file: null
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleUserTypeChange = (e, i, value) => {
    this.setState({ userType: value });
  };

  handleUserChange = (e, i, value) => {
    this.setState({ targetUserId: value });
  };

  handleOnDrop = (acceptedFiles, rejectedFiles) => {
    console.log("onDrop");
  }

  handleSaveAndClose = () => {
    console.log("handleSaveAndClose");

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

    const userTypeItems = [
      <MenuItem key={1} value={1} primaryText="User" />,
      <MenuItem key={2} value={2} primaryText="Company" />,
    ];

    const userItems = [
      <MenuItem key={1} value={1} primaryText="User 1" />,
      <MenuItem key={2} value={2} primaryText="User 2" />,
    ];

    return (
      <div >
        <input type="button" value="Send new document" onTouchTap={this.handleOpen}/>
        <Dialog
          title="Send new document"
          actions={ actions }
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Divider style = { style.dividerStyle }/>
          <SelectField
            value={this.state.userType}
            onChange={this.handleUserTypeChange}
            floatingLabelText="User Type"
            style = { style.dividerStyle }
          >
            { userTypeItems }
          </SelectField>
          <SelectField
            value={this.state.targetUserId}
            onChange={this.handleUserChange}
            floatingLabelText="User"
            style = { style.dividerStyle }
          >
            { userItems }
          </SelectField>
          <Toggle label="Sign Document"
                  thumbStyle={{ backgroundColor: '#ffad33' }}
                  trackStyle={{ backgroundColor: '#ffad33' }}
                  thumbSwitchedStyle={{ backgroundColor: '#EF6C00' }}
                  trackSwitchedStyle={{ backgroundColor: '#EF6C00' }}
                  style = { style.dividerStyle }
      />
          <Toggle label="Request signed response"
                  thumbStyle={{ backgroundColor: '#ffad33' }}
                  trackStyle={{ backgroundColor: '#ffad33' }}
                  thumbSwitchedStyle={{ backgroundColor: '#EF6C00' }}
                  trackSwitchedStyle={{ backgroundColor: '#EF6C00' }}
                  style = { style.dividerStyle }
          />
          <TextField
            hintText="Subject"
            multiLine={true}
            rows={4}
            rowsMax={4}
            style={{width:"100%"}}
          />
          <br />
          <Dropzone />
          <div style = { style.dividerStyle } />
          <Divider style = { style.dividerStyle }/>
        </Dialog>
      </div>
    );
  }
}

export default SentNew;
