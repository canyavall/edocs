//Main
import React from 'react';
import { connect } from 'react-redux';

//Components & Containers
import SenttransactionsComponent from '../../components/SentTransactions';

//actions
import { getSentTransactionsThunk } from '../../actions/sentTransactions';

//material ui
import CircularProgress from 'material-ui/CircularProgress';

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
    if (this.props.senttransactions === null) return <CircularProgress size={60} thickness={7}/>;
    return <SenttransactionsComponent transactions={ this.props.senttransactions }
                                      onRowSelection={ this.handleRowSelection }
                                      clickedRowIds={ this.state.clickedRowIds }
                                      onCLickView={ this.onCLickView }
                                      onClickDownload={ this.onClickDownload }
                                      />
  }
}

const mapStateToProps = (state) => {
  return {
    currentuser: state.currentuser,
    senttransactions: state.senttransactions
  };
}

export default connect(mapStateToProps)(Senttransactions);
