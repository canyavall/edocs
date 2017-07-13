//Main
import React from 'react';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer'

//material ui
import {Card, CardHeader, CardText} from 'material-ui/Card';

const Home = () => (
      <div>
        <Header />
        <div >
          <h1 style={style.greyTitle}>Let us help you with edocs</h1>
        </div>
        <div style={style.wrapper}>
            <Card>
              <CardHeader
                title="How can I create an account in edocs?"
                style={style.titleDiv}
                titleStyle={style.titleDiv}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText
                expandable={true}
                color="grey"
                style={style.textDiv}
                >
              You only need to register yourself in the web.<br />
              In the registration process, the Identity number is requested. This identity number is unique for
              users and companies.
              </CardText>
            </Card>
            <Card>
              <CardHeader
                title="Who uses edocs?"
                style={style.titleDiv}
                titleStyle={style.titleDiv}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText
                expandable={true}
                color="grey"
                style={style.textDiv}
                >
                Actually, almost 80% of the companies in the country are using edocs.<br />
                Our main goal is be present around the world in order to help decreasing the paper consume around
                reduce the costs of the companies and public institutions that involves the transference of files.
              </CardText>
            </Card>
            <Card>
              <CardHeader
                title="How secure is edocs?"
                style={style.titleDiv}
                titleStyle={style.titleDiv}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText
                expandable={true}
                color="grey"
                style={style.textDiv}
                >
                Edocs is using BlockChain technology in order to avoid any atack. <br />
                This way is almost impossible that a hacker can track the files on the servers and open them. <br />
                Actually we are working in orther to maintain the accounts saver from key logs and another tools.
              </CardText>
            </Card>
            <Card>
              <CardHeader
                title="Can I report for spam?"
                style={style.titleDiv}
                titleStyle={style.titleDiv}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText
                expandable={true}
                color="grey"
                style={style.textDiv}
                >
                Edocs is free of spam, there is the possibility to report the companies or users that use their accounts for spamming.<br />
                Anyway, any account declared spam will be investigated as the unique identity number will provide us enough information to investigate them
              </CardText>
            </Card>
        </div>
        <Footer />
      </div>
)

export default Home;
