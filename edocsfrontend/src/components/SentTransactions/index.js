//Main
import React from 'react';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import SearchBoxCategory from '../../containers/SearchBoxCategory';
import SentTransactionTable from '../../components/SentTransactionTable';

//material ui
import View from 'material-ui/svg-icons/action/visibility';
import Download from 'material-ui/svg-icons/file/cloud-download';
import Mail from 'material-ui/svg-icons/content/mail';
import Paper from 'material-ui/Paper';

//utils
import { orangecolor } from '../../utils/constants';

const Senttransactions = (props) => {
    return <div>
            <Header />
            <div style={style.wrapper}>
              <SearchBoxCategory />
              <div style = { style.boxStyle }>
              <div style={ style.topTable }>
                <div style={ style.sendDocument }>
                  <input type="button" value="Send New Document" />
                </div>
              </div>
              <Paper style = { style.paperStyle }>
                <div style ={ style.inlineDiv }>
                  <View style = { style.iconStyle } hoverColor={orangecolor} onClick={ props.onCLickView }/>
                  <Download style = { style.iconStyle } hoverColor={orangecolor} onClick={ props.onClickDownload }/>
                  <Mail style = { style.iconStyle } hoverColor={orangecolor}/>
                </div>
                <Paper >
                  <SentTransactionTable transactions={ props.transactions }
                                        onRowSelection={ props.onRowSelection }
                                        clickedRowIds={ props.clickedRowIds }/>
                </Paper>
              </Paper>
              </div>
              <Footer />
            </div>
          </div>
}


export default Senttransactions;
