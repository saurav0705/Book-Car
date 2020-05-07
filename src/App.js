import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Bookings from './components/Bookings';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/book" component={Registration}/>
      <Route exact path="/bookings" component={Bookings}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
