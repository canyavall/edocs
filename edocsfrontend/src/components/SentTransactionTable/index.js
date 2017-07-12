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

const TransactionTable = (props) => {
  return <Table multiSelectable={true}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Sent</TableHeaderColumn>
              <TableHeaderColumn>Subject</TableHeaderColumn>
              <TableHeaderColumn>Destination</TableHeaderColumn>
              <TableHeaderColumn>Resend Required</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}>
          { props.transactions.map((transaction) => {
                            const reqSignature = (transaction.isRequestedSignature) ? <RequestResend /> : '';
                            return <TableRow key={ transaction.id }>
                                      <TableRowColumn>01/01/2017</TableRowColumn>
                                      <TableRowColumn>{ transaction.subject }</TableRowColumn>
                                      <TableRowColumn>Batman</TableRowColumn>
                                      <TableRowColumn>{reqSignature}</TableRowColumn>
                                    </TableRow>
                        })}
          </TableBody>
        </Table>
}

export default TransactionTable;
