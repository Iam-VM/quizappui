import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Play from './components/playLevelTwo';
import ErrorNotFound from './components/errorNotFound';


const setBodyStyles = () => {
  document.body.classList.add('body');
};

const App = () => {
  setBodyStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/quiz/play' component={Play} exact />
          <Route component={ErrorNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

