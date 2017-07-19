//Main
import React from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router';

//Categories and Containers
import HeaderComponent from '../../components/Header';

//Actions
import { userLogoutAction } from '../../actions/currentuser'


class Header extends React.Component {

  logOut = () => {
    console.log(this.props);
    window.localStorage.clear();
    this.props.dispatch(userLogoutAction());
    this.props.history.push("/");
  }

  render () {
    return <HeaderComponent currentuser={ this.props.currentuser } logOut={ this.logOut } pathname={ this.props.location.pathname }/>
  }
}

const mapStateToProps = (state) => {
  return { currentuser: state.currentuser };
}
const ComposedWithRouter = withRouter(Header);

export default connect(mapStateToProps)(ComposedWithRouter);
