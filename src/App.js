import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import store from "./redux/state";

const App = (props) => {
  return (
      <>
          <Header/>

          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> } /> {/* exact? */}
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost.bind(store)} updateNewPostText={props.updateNewPostText.bind(store)} /> } />
          <Route path='/music' render={ () => <Music /> } />
          <Route path='/news' render={ () => <News /> } />
      </>
  );
}

export default App;
