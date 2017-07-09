//Main
import React from 'react';
import {connect} from 'react-redux'
import { style } from './style';

//Material ui
import Paper from 'material-ui/Paper';
import Person from 'material-ui/svg-icons/social/person';
import Key from 'material-ui/svg-icons/communication/vpn-key';

//Containers and components
import Header from '../../containers/Header';

//Actions
import {checkLogin} from '../../actions/currentuser'


class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      identifier: '',
      password: ''
    }
  }

  changeIdentifier = (e) => {
    const identifier = e.currentTarget.value;
    this.setState({ identifier });
  }

  changePassword = (e) => {
    const password = e.currentTarget.value;
    this.setState({ password });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(checkLogin(this.state))
      .then(() => {
        if (this.props.currentuser.token.length > 0) this.props.history.push("/inbox");
    });
  }

  render () {
    return (<div>
      <div>
        <Header isLoggedIn={this.props.isLoggedIn}/>
      </div>
      <div style= {style.wrapper}>
        <Paper style={style.paperStyle} zDepth={2}>
            <div>
              <form onSubmit={ this.submitForm }>
                <input type="text" placeholder="Identifier" onChange={ this.changeIdentifier } />
                <Person style={{marginTop:'29px', marginLeft:'-50px', position:'absolute', color:'Grey'}}/>
                <input type="password" placeholder="Password" onChange={ this.changePassword } />
                <Key style={{marginTop:'31px', marginLeft:'-50px', position:'absolute', color:'Grey'}}/>
                <input type="submit" />
                <input type="button" value="Register" id="registerButton"/>
              </form>
            </div>
        </Paper>
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    currentuser: state.currentuser
  };
}

export default connect(mapStateToProps)(Login);
