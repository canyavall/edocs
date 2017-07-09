//Main
import React from 'react';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer'

const Home = () => (
      <div>
        <Header />
        <div >
          <h1 style={style.greyTitle}>All your documents in one click</h1>
        </div>
        <div style={style.wrapper}>
          Privacy text
        </div>
        <Footer />
      </div>
)

export default Home;
