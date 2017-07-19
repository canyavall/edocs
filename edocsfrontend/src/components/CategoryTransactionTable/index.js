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

const CategoryTransactionTable = (props) => {
  const clickedRows = props.clickedRowIds;
  return <Table multiSelectable={true}
                onRowSelection={ props.handleRowSelection }
                >
            <TableHeader displaySelectAll={ false }
                         adjustForCheckbox={ true }>
            <TableRow>
              <TableHeaderColumn>Received</TableHeaderColumn>
              <TableHeaderColumn>Subject</TableHeaderColumn>
              <TableHeaderColumn>Company</TableHeaderColumn>
              <TableHeaderColumn>Resend Req.</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}
                     deselectOnClickaway={false}>
          { props.transactions.map((transaction, index ) => {
                          if (transaction.isArchived === props.isArchived) {
                            const reqSignature = (transaction.isRequestedSignature) ? <RequestResend /> : '';
                            return <TableRow key={ transaction.id } selected={(clickedRows.indexOf(index) > -1)}>
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

export default CategoryTransactionTable;
