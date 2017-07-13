//Main
import React from 'react';
import { connect } from 'react-redux';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer'

//material ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

class Profile extends React.Component {
  componentWillMount() {
    // if (this.props.currentuser.email === undefined )
    //   this.props.dispatch(getSentTransactionsThunk(this.props.currentuser.id));
  }

  render (){
    console.log(this.props);
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
                          <div style = { style.dateInput }><input type="text" id="name" name="name" /></div>
                        </div>
                        <div>
                          <div style = { style.labelDateInput }><label htmlFor="name" >Surname: </label></div>
                          <div style = { style.dateInput }><input type="text" id="surname" name="surname" /></div>
                        </div>
                        <div>
                          <div style = { style.labelDateInput }><label htmlFor="identifier" >Identifier: </label></div>
                          <div style = { style.dateInput }><input type="text" id="identifier" name="identifier" /></div>
                        </div>
                      </div>
                      <div id='column2' style = { style.boxStyle }>
                        <div>
                          <div style = { style.labelDateInput }><label htmlFor="email" >Email: </label></div>
                          <div style = { style.dateInput }><input type="text" id="email" name="email" /></div>
                        </div>
                        <div>
                          <div style = { style.labelDateInput }><label htmlFor="password" >Password: </label></div>
                          <div style = { style.dateInput }><input type="password" id="password" name="password" /></div>
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
