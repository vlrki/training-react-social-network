import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {

    props.logout();

    return <Redirect to={"/login"} />
};

export default connect(null, { logout })(Logout);