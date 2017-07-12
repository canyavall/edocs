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
              <TableHeaderColumn>Received</TableHeaderColumn>
              <TableHeaderColumn>Subject</TableHeaderColumn>
              <TableHeaderColumn>Company</TableHeaderColumn>
              <TableHeaderColumn>Resend Req.</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}>
          { props.transactions.map((transaction) => {
                          if (transaction.isArchived === props.isArchived) {
                            const reqSignature = (transaction.isRequestedSignature) ? <RequestResend /> : '';
                            return <TableRow key={ transaction.id }>
                                      <TableRowColumn>01/01/2017</TableRowColumn>
                                      <TableRowColumn>{ transaction.subject }</TableRowColumn>
                                      <TableRowColumn>{ transaction.originUser.name } { transaction.originUser.surname }</TableRowColumn>
                                      <TableRowColumn>{reqSignature}</TableRowColumn>
                                    </TableRow>
                                }
                                return '';
                        })}}
          </TableBody>
        </Table>
}

export default TransactionTable;
