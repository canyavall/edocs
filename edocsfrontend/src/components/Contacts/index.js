//Main
import React from 'react';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import SearchBoxContact from '../../containers/SearchBoxContact';
import ContactFrame from '../../components/ContactFrame';

const Contacts = (props) => {
    return <div>
            <Header />
            <div style={style.wrapper}>
              <SearchBoxContact />
              <ContactFrame contacts = { props.contacts }/>
            </div>
            <Footer />
          </div>
}

export default Contacts;
