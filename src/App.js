import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header/>

      <Route path='/dialogs' component={Dialogs} /> {/* exact? */}
      <Route path='/profile' component={Profile} />
      <Route path='/music' component={Music} />
      <Route path='/news' component={News} />
    </BrowserRouter>
  );
}

export default App;
