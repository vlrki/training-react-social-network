import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <>
      <HeaderContainer />

      <Route path='/dialogs' render={() => <DialogsContainer />} /> {/* exact? */}
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/music' render={() => <Music />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/users' render={() => <UsersContainer />} />
    </>
  );
}

export default App;
