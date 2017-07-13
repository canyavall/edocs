//Main
import React from 'react';
import { style } from './style';

//Material ui
import Status from 'material-ui/svg-icons/toggle/radio-button-checked';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const statusColors = { 1: style.orangeIcon,
                       2: style.greenIcon,
                       3: style.redIcon
                     }

const ContactTable = (props) => {
  return <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Contact name</TableHeaderColumn>
              <TableHeaderColumn>Move to...</TableHeaderColumn>
              <TableHeaderColumn style = { style.iconColumn }>Send</TableHeaderColumn>
              <TableHeaderColumn style = { style.iconColumn }>Receive</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} displayRowCheckbox={false}>
             { props.contacts.map((contact) => {
                 return <TableRow key={ contact.id }>
                           <TableRowColumn>{ contact.targetName }</TableRowColumn>
                           <TableRowColumn>{ contact.targetCategoryName }</TableRowColumn>
                           <TableRowColumn style = { style.iconColumn }><Status style = { statusColors[contact.sendStatus] } /></TableRowColumn>
                           <TableRowColumn style = { style.iconColumn }><Status style = { statusColors[contact.receiveStatus] } /></TableRowColumn>

                         </TableRow>
               })};
          </TableBody>
        </Table>
}

export default ContactTable;
