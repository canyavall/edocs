//Main
import React from 'react';
import { Link } from 'react-router-dom';
import { style } from './style';

//Material ui
import FlatButton from 'material-ui/FlatButton';

const Footer = () => {
  return <div style={ style.wrapper }>
            <Link to="/">
              <FlatButton label="©edocs copyright"
                          style={style.barButtonStyle}
                          labelStyle={ style.labelButton }/>
            </Link>
            <Link to="/privacy">
              <FlatButton label="Privacy"
                          style={style.barButtonStyle}
                          labelStyle={ style.labelButton }/>
            </Link>
  </div>
}

export default Footer;
