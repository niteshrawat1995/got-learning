import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import CharacterList from "./components/Character/List/List";
import CharacterDetail from "./components/Character/Detail/Detail";
import About from './components/About/About';
import HouseList from './components/House/HouseList/HouseList';

const App = () => {
  return (
    <Router>
        <Header/>

        <Switch>
          <Route exact path='/' component={Home} />
          {/* todo : about page*/}
          <Route exact path='/about' component={About} />
          <Route exact path='/characters' component={CharacterList} />
          <Route exact path='/characters/:name' component={CharacterDetail} />
          <Route exact path="/houses" component={HouseList}/>
          {/* <Route exact path="/houses/:name" component={HouseList}/> */}
        </Switch>
        
    </Router>
    

  );
}

export default App;
