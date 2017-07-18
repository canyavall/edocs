//Main
import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { style } from './style';

//Material-ui
import { AppBar } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

//Categories and Containers
import HeaderButtons from '../../components/HeaderButtons';

//Actions
import { userLogoutAction } from '../../actions/currentuser'

//Utils
import logo from '../../img/edoc_medium.jpg'

class Header = (props) => {
  const fullName = props.currentuser.name + " " + props.currentuser.surname;
  let tabBar = "";
  let rightButtons = (
    <div>
      <Link to="/login">
        <FlatButton label="Companies"
                    style={style.barButton}
                    labelStyle={ style.labelButton }/>
      </Link>
      <Link to="/login">
        <FlatButton label="Users"
                    style={style.barButton}
                    labelStyle={ style.labelButton } />
      </Link>
      <Link to="/faq">
        <FlatButton label="FAQ"
                    style={style.barButton}
                    labelStyle={ style.labelButton }/>
      </Link>
      <FlatButton label="en"
                  style={style.barButton}
                  labelStyle={ style.labelButton }/>
    </div>
  );

  if (props.currentuser.token !== null){
    rightButtons = (<div>
                      <Link to="/profile">
                        <FlatButton label={ fullName }
                                    style={ style.barButton }
                                    labelStyle={ style.labelButton }/>
                      </Link>
                      <FlatButton label="Log Out"
                                  style={ style.barButton }
                                  labelStyle={ style.labelButton }
                                  onClick={ this.props.logOut } />
                    </div>
                   );
    tabBar =  <HeaderButtons location = { props.location.pathname }/>
  }
    return <div>
            <AppBar
              iconElementLeft = { <Link to="/"><img src={logo} alt="Edocs Logo"/></Link> }
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

export default ComposedWithRouter;
