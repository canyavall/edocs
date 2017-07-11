//Main
import React from 'react';
import find from 'lodash/find';
import { style } from './style';

//Components & Containers

//material ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import View from 'material-ui/svg-icons/action/visibility';
import Download from 'material-ui/svg-icons/file/cloud-download';
import Print from 'material-ui/svg-icons/action/print';
import Send from 'material-ui/svg-icons/action/exit-to-app';
import RequestResend from 'material-ui/svg-icons/action/swap-horiz';
import Archive from 'material-ui/svg-icons/content/archive';
import Mail from 'material-ui/svg-icons/content/mail';
import CircularProgress from 'material-ui/CircularProgress';
import Settings from 'material-ui/svg-icons/action/settings-applications';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const orangecolor = '#EF6C00';

const Transactions = (props) => {

  const categoryList = props.categories.categoryList;
  const currentCategory = props.categories.currentCategory;
  const isArchive = props.isArchive;
  const currentCategoryInfo = find(categoryList, ['id', currentCategory]);

  if (currentCategoryInfo === undefined || currentCategoryInfo.transactions === undefined )
        return <CircularProgress size={60} thickness={7}/>;
  const transactions = currentCategoryInfo.transactions;
  return (
    <div style = { style.boxStyle }>
        <Paper style = { style.paperStyle }>
          {categoryList.map((category) => {
            return <RaisedButton label={ category.name }
                                 key = { category.id }
                                 style={{marginLeft: "auto", marginRight: "1px"}}
                                 />
          })}
          <Settings style= { style.settingsIconStyle }/>
          <div >
            <div style ={ style.inlineDiv }>
              <View style = { style.iconStyle } hoverColor={orangecolor} />
              <Download style = { style.iconStyle } hoverColor={orangecolor} />
              <Mail style = { style.iconStyle } hoverColor={orangecolor} />
              <Print style = { style.iconStyle } hoverColor={orangecolor} />
            </div>
            <div style = { style.topTableRightIcons }>
              <Send style = { style.iconStyle } hoverColor={orangecolor} />
              <Archive style = { style.iconStyle } hoverColor={orangecolor} />
            </div>
          </div>
          <Paper >
          <Table multiSelectable={true}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Received</TableHeaderColumn>
                <TableHeaderColumn>Subject</TableHeaderColumn>
                <TableHeaderColumn>Company</TableHeaderColumn>
                <TableHeaderColumn>Resend Req.</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody showRowHover={true}>
            { transactions.map((transaction) => {
                            if (transaction.isArchived === isArchive) {
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
          </Paper>
        </Paper>
    </div>
  )
}

export default Transactions;
