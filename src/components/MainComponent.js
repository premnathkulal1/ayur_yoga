import React, { Component } from 'react';
import Header from './HeaderComponent';
import HomeContent from './HomeComponent';
import Footer from './FooterComponent';
import Navigation from './NavComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import AyurvedaPage from './AyurvedaComponent';
import YogaPage from './YogaComponent';

import { AYUR } from '../shared/AyurvedaInfo';
import { YOGA } from '../shared/YogaInfo';


class Main extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        ayurveda: AYUR,
        yoga: YOGA,
        introId: 0
    };
  }

  render(){ 

    const AyurvedaWithId = ({match}) => {
      return(
        <AyurvedaPage
            contents1={this.state.ayurveda}
            contents2={parseInt(match.params.dishId,10)}
        /> 
      );
    }

    const YogaWithId = ({match}) => {
      return(
        <YogaPage
            contents1={this.state.yoga}
            contents2={parseInt(match.params.dishId,10)}
        /> 
      );
    }

    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/home" component={HomeContent} />
          <Route exact path="/Ayurveda" component={() => <AyurvedaPage contents1={this.state.ayurveda} contents2={this.state.introId} />} />
          <Route exact path="/Ayurveda/:dishId" component={AyurvedaWithId} />
          <Route exact path="/Yoga" component={() => <YogaPage contents1={this.state.yoga} contents2={this.state.introId} />} />
          <Route exact path="/Yoga/:dishId" component={YogaWithId} />
          <Redirect to="/home" />
        </ Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;