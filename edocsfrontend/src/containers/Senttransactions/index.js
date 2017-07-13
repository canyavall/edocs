//Main
import React from 'react';
import { connect } from 'react-redux';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import SearchBox from '../../containers/SearchBox';
import SentTransactionTable from '../../components/SentTransactionTable';

//material ui
import CircularProgress from 'material-ui/CircularProgress';
import View from 'material-ui/svg-icons/action/visibility';
import Download from 'material-ui/svg-icons/file/cloud-download';
import Mail from 'material-ui/svg-icons/content/mail';
import Paper from 'material-ui/Paper';

//utils
import { orangecolor } from '../../utils/constants';

//actions
import { getSentTransactionsThunk } from '../../actions/sentTransactions';

class Senttransactions extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        clickedRowIds: []
      }
    }

  componentWillMount() {
    if (this.props.senttransactions === null )
      this.props.dispatch(getSentTransactionsThunk(this.props.currentuser.id));
  }

  handleRowSelection = (rowIds) => {
    this.setState({
      clickedRowIds: rowIds
    });
  }

  onCLickView = () => {
    const transactions = this.props.senttransactions;
    const rows = this.state.clickedRowIds;
    const properties = 'scrollbars=1,menubar=0,resizable=1,width=850,height=500';
    rows.forEach((row) => window.open(transactions[row].document.path,"_blank",'PopUp',row,properties));
  }

  onClickDownload = () => {
    const transactions = this.props.senttransactions;
    const rows = this.state.clickedRowIds;
    rows.forEach((row) => {
        var csvUrl = document.createElement('a');
        csvUrl.href = transactions[row].document.path;
        csvUrl.download = transactions[row].id;
        csvUrl.click();
    })
  }

  render () {
    const senttransactions = this.props.senttransactions;
    if (senttransactions === null)
          return <CircularProgress size={60} thickness={7}/>;
    return <div>
            <Header />
            <div style={style.wrapper}>
              <SearchBox />
              <div style = { style.boxStyle }>
              <Paper style = { style.paperStyle }>
                <div style ={ style.inlineDiv }>
                  <View style = { style.iconStyle } hoverColor={orangecolor} onClick={ this.onCLickView }/>
                  <Download style = { style.iconStyle } hoverColor={orangecolor} onClick={ this.onClickDownload }/>
                  <Mail style = { style.iconStyle } hoverColor={orangecolor}/>
                </div>
                <Paper >
                  <SentTransactionTable transactions={ this.props.senttransactions }
                                        onRowSelection={ this.handleRowSelection }
                                        clickedRowIds={ this.state.clickedRowIds }/>
                </Paper>
              </Paper>
              </div>
              <Footer />
            </div>
          </div>
  }
}

const mapStateToProps = (state) => {
  return {
    currentuser: state.currentuser,
    senttransactions: state.senttransactions
  };
}

export default connect(mapStateToProps)(Senttransactions);
