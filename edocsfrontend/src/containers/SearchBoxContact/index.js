//Main
import React from 'react';
import { style } from './style';

//Components & Containers

//material ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const SearchBoxContact = () => (
      <div style = { style.boxStyle }>
          <Paper style = { style.paperStyle }>

            <input type="search" placeholder="search" />

            <Divider style= { style.dividerStyle }/>

            <div style={ style.wrapper }>
              Send:
              <div style={{ marginTop: "15px"}}>
                <input type="checkbox" name="SendAccepted" value="true" style = { style.inputStyle }/>
                <label style = { style.inlineGreenBLock }>Show accepted</label>
              </div>
              <div>
                <input type="checkbox" name="SendRequested" value="true" style = { style.inputStyle }/>
                <label style = { style.inlineOrangeBLock }>Show requested</label>
              </div>
              <div >
                <input type="checkbox" name="SendBlocked" value="true" style = { style.inputStyle }/>
                <label style = { style.inlineRedBLock }>Show blocked</label>
              </div>
            </div>

            <div style={ style.wrapper }>
              Receive:
              <div style={{ marginTop: "15px"}}>
                <input type="checkbox" name="ReceiveAccepted" value="true" style = { style.inputStyle }/>
                <label style = { style.inlineGreenBLock }>Show accepted</label>
              </div>
              <div>
                <input type="checkbox" name="ReceiveRequested" value="true" style = { style.inputStyle }/>
                <label style = { style.inlineOrangeBLock }>Show requested</label>
              </div>
              <div >
                <input type="checkbox" name="ReceiveBlocked" value="true" style = { style.inputStyle }/>
                <label style = { style.inlineRedBLock }>Show blocked</label>
              </div>
            </div>

            <Divider style= { style.dividerStyle }/>
            <input type="button" value="Filter" />
          </Paper>
      </div>
)

export default SearchBoxContact;
