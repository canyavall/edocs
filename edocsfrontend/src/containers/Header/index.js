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
import { blackcolor } from '../../utils/constants'
import FlatButton from 'material-ui/FlatButton';

//Categories and Containers
import HeaderButtons from '../../components/HeaderButtons';

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
                        <Link to="/profile">
                          <Account style={ style.icon } hoverColor={ blackcolor }/>
                        </Link>
                        <LogOut onClick={ this.logOut } style={ style.icon } hoverColor={ blackcolor }/>
                      </div>
                     );
      tabBar =  <HeaderButtons location = { this.props.location.pathname }/>
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
