import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from './components/Login/Login';
import LogoutPage from './components/Login/Logout';

const App = (props) => {
  return (
    <>
      <HeaderContainer />

      <Route path='/dialogs' render={() => <DialogsContainer />} /> {/* exact? */}
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/music' render={() => <Music />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/users' render={() => <UsersContainer />} />
      <Route path='/login' render={() => <LoginPage />} />
      <Route path='/logout' render={() => <LogoutPage />} />
    </>
  );
}

export default App;
