import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { initializeApp } from './redux/app-reducer';

import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from './components/Login/Login';
import LogoutPage from './components/Login/Logout';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {

    componentDidMount(props) {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        } else {
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
    }
};

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

