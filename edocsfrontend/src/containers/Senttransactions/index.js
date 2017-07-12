//Main
import React from 'react';
import { connect } from 'react-redux';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import SearchBox from '../../containers/SearchBox';
import TransactionTable from '../../components/TransactionTable';

//material ui
import CircularProgress from 'material-ui/CircularProgress';
import View from 'material-ui/svg-icons/action/visibility';
import Download from 'material-ui/svg-icons/file/cloud-download';
import Print from 'material-ui/svg-icons/action/print';
import Mail from 'material-ui/svg-icons/content/mail';
import Paper from 'material-ui/Paper';

//utils
import { orangecolor } from '../../utils/constants';

//actions
import { getCategoryList,
         saveCurrentCategory,
         getCategoryinfo
        } from '../../actions/categories';

class Senttransactions extends React.Component {

  componentWillMount() {

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
                  <View style = { style.iconStyle } hoverColor={orangecolor} />
                  <Download style = { style.iconStyle } hoverColor={orangecolor} />
                  <Mail style = { style.iconStyle } hoverColor={orangecolor} />
                  <Print style = { style.iconStyle } hoverColor={orangecolor} />
                </div>
                <Paper >
                  
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
    senttransactions: state.senttransactions
  };
}

export default connect(mapStateToProps)(Senttransactions);;
