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

class TransactionTable extends React.Component {
  render () {
    const clickedRows = this.props.clickedRowIds;
    console.log(this.props.clickedRowIds);
    return <Table multiSelectable={true}
                onRowSelection={ this.props.onRowSelection }
                >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Sent</TableHeaderColumn>
              <TableHeaderColumn>Subject</TableHeaderColumn>
              <TableHeaderColumn>Destination</TableHeaderColumn>
              <TableHeaderColumn>Resend Required</TableHeaderColumn>
            </TableRow>
          </TableHeader >
          <TableBody showRowHover={true}
                     deselectOnClickaway={false}>
          { this.props.transactions.map((transaction, index) => {
                            const reqSignature = (transaction.isRequestedSignature) ? <RequestResend /> : '';
                            return <TableRow key={ transaction.id } selected={(clickedRows.indexOf(index) > -1)}>
                                      <TableRowColumn>01/01/2017</TableRowColumn>
                                      <TableRowColumn>{ transaction.subject }</TableRowColumn>
                                      <TableRowColumn>Batman</TableRowColumn>
                                      <TableRowColumn>{reqSignature}</TableRowColumn>
                                    </TableRow>
                        })}
          </TableBody>
        </Table>
  }
}
export default TransactionTable;
