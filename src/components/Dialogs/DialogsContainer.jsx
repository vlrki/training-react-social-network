import React from 'react';
import Dialogs from "./Dialogs";
import { updateNewMessageCreator, addNewMessageCreator } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (message) => {
            dispatch(updateNewMessageCreator(message));
        },
        onSendMessageClick: () => {
            dispatch(addNewMessageCreator());
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
