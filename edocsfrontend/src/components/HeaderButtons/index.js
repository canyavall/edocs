//Main
import React from 'react';
import { Link } from 'react-router-dom';
import { style } from './style';

//Components and Containers

//Material ui
import RaisedButton from 'material-ui/RaisedButton';
import Contacts from 'material-ui/svg-icons/communication/contacts';
import Archive from 'material-ui/svg-icons/content/archive';
import Inbox from 'material-ui/svg-icons/content/inbox';
import Send from 'material-ui/svg-icons/content/send';

//utils
import { orangecolor, whitecolor } from '../../utils/constants'

const HeaderButtons = (props) => {
  const currentPath = props.location;
  return  (<div>
              <Link to="/inbox">
                <RaisedButton label="Inbox"
                              backgroundColor = { (currentPath === "/inbox") ? orangecolor : whitecolor }
                              labelColor = { (currentPath === "/inbox") ? whitecolor : orangecolor  }
                              style={ style.menuIconFirst }
                              icon={<Inbox />}/>
              </Link>
              <Link to="/sent">
                <RaisedButton label="Sent"
                              backgroundColor = { (currentPath === "/sent") ? orangecolor : whitecolor }
                              labelColor = { (currentPath === "/sent") ? whitecolor : orangecolor  }
                              style={ style.menuIcon }
                              icon={<Send />}/>
              </Link>
              <Link to="/archive">
                <RaisedButton label="Archive"
                              backgroundColor = { (currentPath === "/archive") ? orangecolor : whitecolor }
                              labelColor = { (currentPath === "/archive") ? whitecolor : orangecolor  }
                              style={ style.menuIcon }
                              icon={<Archive />}/>
              </Link>
              <Link to="/contacts">
                <RaisedButton label="Contacts"
                              backgroundColor = { (currentPath === "/contacts") ? orangecolor : whitecolor }
                              labelColor = { (currentPath === "/contacts") ? whitecolor : orangecolor  }
                              icon={<Contacts />}/>
              </Link>
            </div>);
}

export default HeaderButtons;
