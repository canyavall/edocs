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
import Footer from '../../components/Footer'

//Actions
import {checkLoginThunk} from '../../actions/currentuser'


class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      identityNumber: '',
      password: ''
    }
  }

  changeIdentifier = (e) => {
    const identityNumber = e.currentTarget.value;
    this.setState({ identityNumber });
  }

  changePassword = (e) => {
    const password = e.currentTarget.value;
    this.setState({ password });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(checkLoginThunk(this.state))
      .then(() => {
        console.log(this.props);
        if (this.props.currentuser.token != null) this.props.history.push("/inbox");
    });
  }

  render () {
    return (<div>
              <Header />
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
              <Footer />
          </div>

  )
  }
}

const mapStateToProps = (state) => {
  return {
    currentuser: state.currentuser
  };
}

export default connect(mapStateToProps)(Login);
