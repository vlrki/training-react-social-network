import React, { Component, Suspense } from 'react';
import './App.css';

import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import { initializeApp } from './redux/app-reducer';
import store from './redux/redux-store';

import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/common/Preloader/Preloader';

const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const LoginPage = React.lazy(() => import('./components/Login/Login'));
const LogoutPage = React.lazy(() => import('./components/Login/Logout'));

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

                    <Suspense fallback={<Preloader />}>
                        <Route path='/dialogs' render={() => <DialogsContainer />} /> {/* exact? */}
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        <Route path='/music' render={() => <Music />} />
                        <Route path='/news' render={() => <News />} />
                        <Route path='/users' render={() => <UsersContainer />} />
                        <Route path='/login' render={() => <LoginPage />} />
                        <Route path='/logout' render={() => <LogoutPage />} />
                    </Suspense>
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

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

let MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
}

export default MainApp;