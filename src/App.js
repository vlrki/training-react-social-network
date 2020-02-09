import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <>
      <Header />

      <Route path='/dialogs' render={() => <DialogsContainer />} /> {/* exact? */}
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/music' render={() => <Music />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/users' render={() => <UsersContainer />} />
    </>
  );
}

export default App;
