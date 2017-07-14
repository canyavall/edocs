//Main
import React from 'react';
import { style } from './style';

//Components & Containers
import Header from '../../containers/Header';
import Footer from '../../components/Footer'


//material ui
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

//Utils
import logo from '../../img/edoc_medium.jpg';
import img1 from '../../img/img1.JPG';
import img2 from '../../img/img2.JPG';
import img3 from '../../img/img3.JPG';

const Home = () => (
      <div>
        <Header />
        <div >
          <h1 style={style.greyTitle}>All your documents in one click</h1>
        </div>
        <div style={style.wrapper}>
          <Card style = { style.inlineDiv }>
            <img src={ img1 } alt="" width="50%"/>
            <CardTitle title="What’s EDocs?" />
            <CardText style= {{color: "grey", fontSize:'105%', textAlign:"left"}}>
              <p>eDocs is a system to store all the documents addressed to a user in his unique secure account. </p>
              <p>Having all documents addressed to the user in the same app will  reduce administration cost and ease the document managing for the user.</p>
            </CardText>
          </Card>
          <Card style = { style.inlineDiv }>
            <img src={ img2 } alt="" width="50%"/>
            <CardTitle title="What can do eDocs for me?" />
            <CardText style= {{color: "grey", fontSize:'105%', textAlign:"left"}}>
            <p>eDocs stores all documents received from another users (companies or persons) in a simple and personalized way.</p>
            <p>With eDocs all documents will be in the same place and you’ll be able to view them, download them or resend to other users.</p>
            <p>eDocs allows you to decide who can send you documents, having total control to accept or reject documents from other users if you are not interested.</p>
            </CardText>
          </Card>
          <Card style = { style.inlineDiv }>
            <img src={ img3 } alt="" width="50%"/>
            <CardTitle title="Edocs features" />
            <CardText style= {{color: "grey", fontSize:'105%', textAlign:"left"}}>
              <p>eDocs reduce the cost of the companies managing documentation and sending it to other companies, clients, providers…</p>
              <p>eDocs is eco-friendly reducing the paper used to create documents.</p>
              <p>eDocs is secure and allows the user to create legal documents before sending them.</p>
              <p>eDocs helps the user having all the documents in only one device.</p>
            </CardText>
          </Card>
        </div>
        <Footer />
      </div>
)

export default Home;
