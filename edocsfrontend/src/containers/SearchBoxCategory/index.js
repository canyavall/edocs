//Main
import React from 'react';
import { style } from './style';

//Components & Containers

//material ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';

const SearchBoxCategory = () => (
      <div style = { style.boxStyle }>
          <Paper style = { style.paperStyle }>

            <input type="search" placeholder="search" />

            <Divider style= { style.dividerStyle }/>

            <div>
              <div style = { style.labelDateInput }><label htmlFor="fday" >From: </label></div>
              <div style = { style.dateInput }><input type="date" id="fday" name="fday" /></div>
            </div>

            <div>
              <div style = { style.labelDateInput }><label htmlFor="tday" >To: </label></div>
              <div style = { style.dateInput }><input type="date" id="tday" name="tday" /></div>
            </div>

            <Toggle
              style= { style.dividerStyle }
              label="Show only 'Requested response'"
              defaultToggled={false}
            />

            <input type="text" placeholder="company" style= { style.dividerStyle }/>

            <Divider style= { style.dividerStyle }/>

            <input type="button" value="Filter" />

          </Paper>
      </div>
)

export default SearchBoxCategory;
