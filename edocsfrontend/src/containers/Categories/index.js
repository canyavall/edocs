//Main
import React from 'react';
import find from 'lodash/find';
import { style } from './style';

//Components & Containers
import CategoryButtonAdd from '../../components/CategoryButtonAdd';
import { orangecolor } from '../../utils/constants'
import TransactionTable from '../../components/TransactionTable';
import CategoryButtonList from '../../components/CategoryButtonList';

//material ui
import Paper from 'material-ui/Paper';
import View from 'material-ui/svg-icons/action/visibility';
import Download from 'material-ui/svg-icons/file/cloud-download';
import Print from 'material-ui/svg-icons/action/print';
import Send from 'material-ui/svg-icons/action/exit-to-app';
import Archive from 'material-ui/svg-icons/content/archive';
import Mail from 'material-ui/svg-icons/content/mail';
import Inbox from 'material-ui/svg-icons/content/inbox';
import CircularProgress from 'material-ui/CircularProgress';

const Transactions = (props) => {
  //Prepare constants
  const categoryList = props.categories.categoryList;
  const currentCategory = props.categories.currentCategory;
  const isArchive = props.isArchive;
  const archiveInbox = (isArchive) ?
                        <Inbox style = { style.iconStyle } hoverColor={orangecolor} /> :
                        <Archive style = { style.iconStyle } hoverColor={orangecolor} />;
  const currentCategoryInfo = find(categoryList, ['id', currentCategory]);
  const loader = (<div style = { style.boxStyle }>
                    <Paper style = { style.paperStyle }>
                      <CircularProgress size={60} thickness={7}/>
                    </Paper>
                  </div>)

  //Check data
  if (currentCategoryInfo === undefined) return loader;
  if (currentCategoryInfo.transactions === undefined){
        props.categoryInfo();
        return loader;
  }

  const transactions = currentCategoryInfo.transactions;

  //Render
  return (
    <div style = { style.boxStyle }>
        <Paper style = { style.paperStyle }>
          <CategoryButtonList categoryList = { categoryList }  changeCurrentCategory = { props.changeCurrentCategory } />
          <CategoryButtonAdd />
          <div >
            <div style ={ style.inlineDiv }>
              <View style = { style.iconStyle } hoverColor={orangecolor} />
              <Download style = { style.iconStyle } hoverColor={orangecolor} />
              <Mail style = { style.iconStyle } hoverColor={orangecolor} />
              <Print style = { style.iconStyle } hoverColor={orangecolor} />
            </div>
            <div style = { style.topTableRightIcons }>
              <Send style = { style.iconStyle } hoverColor={orangecolor} />
              { archiveInbox }
            </div>
          </div>
          <Paper >
            <TransactionTable transactions = { transactions } isArchived = { isArchive } />
          </Paper>
        </Paper>
    </div>
  )
}

export default Transactions;
