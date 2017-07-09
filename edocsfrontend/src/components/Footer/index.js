//Main
import React from 'react';
import { Link } from 'react-router-dom';

//Material ui
import FlatButton from 'material-ui/FlatButton';

//utils
import { barButtonStyle } from '../../utils/style';

const style = {
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%'
}

const Footer = () => {
  return <div style={ style }>
            <Link to="/conditions"><FlatButton label="Conditions" style={barButtonStyle} /></Link>
            <Link to="/privacy"><FlatButton label="Privacy" style={barButtonStyle} /></Link>
  </div>
}

export default Footer;
