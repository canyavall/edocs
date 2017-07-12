//Main
import React from 'react';
import { style } from './style';
import { blackcolor } from '../../utils/constants'

//Material ui
import Settings from 'material-ui/svg-icons/action/settings-applications';

const AddCategoryButton = () => {
  return <Settings style= { style.settingsIconStyle } hoverColor={blackcolor}/>
}

export default AddCategoryButton;
