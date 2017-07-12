//Main
import React from 'react';

//Material ui
import RequestResend from 'material-ui/svg-icons/action/swap-horiz';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const ContactTable = (props) => {
  return <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Contact name</TableHeaderColumn>
              <TableHeaderColumn>Send</TableHeaderColumn>
              <TableHeaderColumn>Receive</TableHeaderColumn>
              <TableHeaderColumn>Move to...</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}>

          </TableBody>
        </Table>
}

export default ContactTable;

// { props.transactions.map((transaction) => {
//                   const reqSignature = (transaction.isRequestedSignature) ? <RequestResend /> : '';
//                   return <TableRow key={ transaction.id }>
//                             <TableRowColumn>01/01/2017</TableRowColumn>
//                             <TableRowColumn>{ transaction.subject }</TableRowColumn>
//                             <TableRowColumn>Batman</TableRowColumn>
//                             <TableRowColumn>{reqSignature}</TableRowColumn>
//                           </TableRow>
//               })}
