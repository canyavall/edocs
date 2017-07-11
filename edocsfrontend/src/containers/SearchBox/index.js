//Main
import React from 'react';
import { style } from './style';

//Components & Containers

//material ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';

const SearchBox = () => (
      <div style = { style.boxStyle }>
          <Paper style = { style.paperStyle }>

            <input type="search" placeholder="search" />

            <Divider style= { style.dividerStyle }/>

            <div>
              <label htmlFor="fday">From: </label>
              <input type="date" id="fday" name="fday" />
            </div>

            <div>
              <label htmlFor="tday">To: </label>
              <input type="date" id="tday" name="tday" />
            </div>

            <Toggle
              style= { style.dividerStyle }
              label="Show only 'Required a signal response'"
              defaultToggled={false}
            />

            <input type="text" placeholder="company" style= { style.dividerStyle }/>

            <Divider style= { style.dividerStyle }/>

            <input type="button" value="Filter" />

          </Paper>
      </div>
)

export default SearchBox;
