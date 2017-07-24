//Main
import React from 'react';
import { style } from './style';

//Components & Containers
import ContactTable from '../../components/ContactTable';

//material ui
import Paper from 'material-ui/Paper';
import Status from 'material-ui/svg-icons/toggle/radio-button-checked';

const ContactFrame = (props) => {
  const contacts = props.contacts;
  return (
    <div style = { style.boxStyle }>
      <div style={ style.topTable }>
        <div style={ style.addContact }>
          <input type="button" value="Add Contact" />
        </div>
        <div style={ style.legend }>
          <div style={ style.legendItems }><Status style={ style.greenIcon } /> Accepted</div>
          <div style={ style.legendItems }><Status style={ style.orangeIcon } /> Requested</div>
          <div style={ style.legendItems }><Status style={ style.redIcon } /> Rejected</div>
        </div>
      </div>
      <Paper style = { style.paperStyle }>
        <Paper >
          <ContactTable contacts = { contacts }/>
        </Paper>
      </Paper>
    </div>
  )
}
export default ContactFrame;
