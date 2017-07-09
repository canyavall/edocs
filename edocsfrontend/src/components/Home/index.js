//Main
import React from 'react';
//Components & Containers
import Header from '../../containers/Header';
import Footer from '../Footer'
//Utils
import {bodyContainer, greyTitle} from '../../utils/style';

const Home = () => (
      <div>
        <Header />
        <div >
          <h1 style={greyTitle}>All your documents in one click</h1>
        </div>
        <div style={bodyContainer}>
        and here the 3 box
        </div>
        <Footer />
      </div>
)

export default Home;
