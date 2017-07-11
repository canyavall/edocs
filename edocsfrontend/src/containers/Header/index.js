//Main
import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { style } from './style';

//Material-ui
import { AppBar } from 'material-ui';
import LogOut from 'material-ui/svg-icons/image/adjust';
import Account from 'material-ui/svg-icons/action/account-box';
import { black } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Contacts from 'material-ui/svg-icons/communication/contacts';
import Archive from 'material-ui/svg-icons/content/archive';
import Inbox from 'material-ui/svg-icons/content/inbox';
import Send from 'material-ui/svg-icons/content/send';


//Actions
import { userLogout } from '../../actions/currentuser'

//Utils
import logo from '../../img/edoc_medium.jpg'

class Header extends React.Component {

  logOut = () => {
    window.localStorage.clear();
    this.props.dispatch(userLogout());
    this.props.history.push("/");
  }

  render () {
    let tabBar = "";
    let rightButtons = (
      <div>
        <Link to="/login"><FlatButton label="Companies" style={style.barButtonStyle} /></Link>
        <Link to="/login"><FlatButton label="Users" style={style.barButtonStyle} /></Link>
        <Link to="/faq"><FlatButton label="FAQ" style={style.barButtonStyle} /></Link>
        <FlatButton label="en" style={style.barButtonStyle} />
      </div>
    );

    if (this.props.currentuser.token !== null){
      rightButtons = (<div>
                        <Link to="/profile"><Account style={style.icon} hoverColor={black}/></Link>
                        <LogOut onClick={ this.logOut } style={style.icon} hoverColor={black}/>
                      </div>
                     );
      tabBar =  (<div>
                  <Link to="/inbox"><RaisedButton label="Inbox" style={ style.menuIconFirs } icon={<Inbox />}/></Link>
                  <RaisedButton label="Sent"  style={ style.menuIcon } icon={<Send />}/>
                  <Link to="/archive"><RaisedButton label="Archive" style={ style.menuIcon } icon={<Archive />}/></Link>
                  <RaisedButton label="Contacts" icon={<Contacts />}/>
                </div>);
    }
    return <div>
            <AppBar
              iconElementLeft = { <img src={logo} alt="Edocs Logo"/> }
              showMenuIconButton = { true }
              iconElementRight = { rightButtons }
              style = { style.navbar }
            >
            </AppBar>
            { tabBar }
          </div>;
  }

}


const ComposedWithRouter = withRouter(Header);

const mapStateToProps = (state) => {
  return { currentuser: state.currentuser };
}

export default connect(mapStateToProps)(ComposedWithRouter);
