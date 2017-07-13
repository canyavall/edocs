//Main
import React from 'react';
import { connect } from 'react-redux';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer'
import { getUserInformationThunk } from '../../actions/currentuser';

//material ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      surname: ''
    }
  }
  componentWillMount() {
     if (this.props.currentuser.email === undefined )
       this.props.dispatch(getUserInformationThunk(this.props.currentuser.token));
  }

  changeValue = (e) => {
    const identityNumber = e.currentTarget.value;
    this.setState({ identityNumber });
  }

  render (){
    const currentUser = this.props.currentuser;
    console.log(currentUser);
    if (currentUser.email === undefined) return <div>"Loading"</div>;
    return (
          <div>
            <Header />
            <div >
              <h1 style={style.greyTitle}>Profile</h1>
              <Divider style={style.divider}/>
            </div>
            <div style= {style.wrapper}>
              <Paper style={style.paperStyle} zDepth={2}>
                  <div>
                    <form >
                      <div id='column1' style = { style.boxStyle }>
                        <div>
                          <div style = { style.labelDateInput }><label htmlFor="name" >Name: </label></div>
                          <div style = { style.dateInput }><input type="text" id="name" name="name" value={ currentUser.name } onChange={ this.changeValue }/></div>
                        </div>
                        <div>
                          <div style = { style.labelDateInput }><label htmlFor="name" >Surname: </label></div>
                          <div style = { style.dateInput }><input type="text" id="surname" name="surname" value={ currentUser.surname } onChange={ this.changeValue }/></div>
                        </div>
                        <div>
                          <div style = { style.labelDateInput }><label htmlFor="identifier" >Identity: </label></div>
                          <div style = { style.dateInput }><input type="text" id="identifier" name="identifier" value={ currentUser.identityNumber } onChange={ this.changeValue }/></div>
                        </div>
                      </div>
                      <div id='column2' style = { style.boxStyle }>
                        <div>
                          <div style = { style.labelDateInput }><label htmlFor="email" >Email: </label></div>
                          <div style = { style.dateInput }><input type="text" id="email" name="email" value={ currentUser.email } onChange={ this.changeValue }/></div>
                        </div>
                        <div>
                          <div style = { style.labelDateInput }><label htmlFor="password" >Password: </label></div>
                          <div style = { style.dateInput }><input type="password" id="password" name="password" value="********" onChange={ this.changeValue }/></div>
                        </div>
                      </div>
                      <div>
                        <input type="submit" style = {{width: '400px', height:'30px', padding:'25px'}}/>
                      </div>
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
export default connect(mapStateToProps)(Profile);
