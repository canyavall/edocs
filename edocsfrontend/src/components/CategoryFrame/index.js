//Main
import React from 'react';
import find from 'lodash/find';
import { style } from './style';

//Components & Containers
import CategoryButtonSettings from '../../components/CategoryButtonSettings';
import CategoryTransactionTable from '../../components/CategoryTransactionTable';
import CategoryButtonList from '../../components/CategoryButtonList';

//material ui
import Paper from 'material-ui/Paper';
import View from 'material-ui/svg-icons/action/visibility';
import Download from 'material-ui/svg-icons/file/cloud-download';
import Send from 'material-ui/svg-icons/action/exit-to-app';
import Archive from 'material-ui/svg-icons/content/archive';
import Mail from 'material-ui/svg-icons/content/mail';
import Inbox from 'material-ui/svg-icons/content/inbox';
import CircularProgress from 'material-ui/CircularProgress';

//utils
import { orangecolor } from '../../utils/constants';

class CategoryFrame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          clickedRowIds: []
        }
      }

  handleRowSelection = (rowIds) => {
    console.log("pe");
    this.setState({
      clickedRowIds: rowIds
    });
  }

  onCLickView = () => {
    const rows = this.state.clickedRowIds;
    const properties = 'scrollbars=1,menubar=0,resizable=1,width=850,height=500';
    rows.forEach((row) => window.open(this.transactions[row].document.path,"_blank",'PopUp',row,properties));
  }

  onClickDownload = () => {
    const rows = this.state.clickedRowIds;
    rows.forEach((row) => {
        var csvUrl = document.createElement('a');
        csvUrl.href = this.transactions[row].document.path;
        csvUrl.download = this.transactions[row].id;
        csvUrl.click();
    })
  }

  render() {
  //Prepare constants
  this.categoryList = this.props.categories.categoryList;
  this.currentCategory = this.props.categories.currentCategory;
  const isArchive = this.props.isArchive;
  const archiveInbox = (isArchive) ?
                        <Inbox style = { style.iconStyle } hoverColor={orangecolor} /> :
                        <Archive style = { style.iconStyle } hoverColor={orangecolor} />;
  this.currentCategoryInfo = find(this.categoryList, ['id', this.currentCategory]);
  const loader = (<div style = { style.boxStyle }>
                    <Paper style = { style.paperStyle }>
                      <CircularProgress size={60} thickness={7}/>
                    </Paper>
                  </div>)

  //Check data
  if (this.currentCategoryInfo === undefined) return loader;
  if (this.currentCategoryInfo.transactions === undefined){
        this.props.categoryInfo();
        return loader;
  }

  this.transactions = this.currentCategoryInfo.transactions;

  //Render
  return (
      <div style = { style.boxStyle }>
          <Paper style = { style.paperStyle }>
            <CategoryButtonList categoryList = { this.categoryList }
                                changeCurrentCategory = { this.props.changeCurrentCategory }
                                currentCategory = { this.currentCategory }
                                />
            <CategoryButtonSettings categoryList = { this.categoryList }/>
            <div >
              <div style ={ style.inlineDiv }>
                <View style = { style.iconStyle } hoverColor={orangecolor} onClick={ this.onCLickView }/>
                <Download style = { style.iconStyle } hoverColor={orangecolor} onClick={ this.onClickDownload }/>
                <Mail style = { style.iconStyle } hoverColor={orangecolor} />
              </div>
              <div style = { style.topTableRightIcons }>
                <Send style = { style.iconStyle } hoverColor={orangecolor} />
                { archiveInbox }
              </div>
            </div>
            <Paper >
              <CategoryTransactionTable transactions = { this.transactions }
                                isArchived = { isArchive }
                                handleRowSelection = { this.handleRowSelection }
                                clickedRowIds = { this.state.clickedRowIds }
                                />
            </Paper>
          </Paper>
      </div>
    )
  }
}

export default CategoryFrame;
