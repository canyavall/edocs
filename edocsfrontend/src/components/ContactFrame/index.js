//Main
import React from 'react';
import { style } from './style';

//Components & Containers
import ContactTable from '../../components/ContactTable';

//material ui
import Paper from 'material-ui/Paper';

const ContactFrame = (props) => {
  const contacts = props.contacts;
  return (
    <div style = { style.boxStyle }>
        <Paper style = { style.paperStyle }>
          <Paper >
            <ContactTable contacts = { contacts }/>
          </Paper>
        </Paper>
    </div>
  )
}
export default ContactFrame;
