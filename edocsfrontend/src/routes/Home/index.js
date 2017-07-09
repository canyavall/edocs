//Main
import React from 'react';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer'

//material ui
import Paper from 'material-ui/Paper';

const Home = () => (
      <div>
        <Header />
        <div >
          <h1 style={style.greyTitle}>All your documents in one click</h1>
        </div>
        <div style={style.wrapper}>
          <Paper style= { style.boxStyle }>How edocs work?</Paper>
          <Paper style= { style.boxStyle }>Who uses edocs?</Paper>
          <Paper style= { style.boxStyle }>How secure is edocs?</Paper>
        </div>
        <Footer />
      </div>
)

export default Home;
