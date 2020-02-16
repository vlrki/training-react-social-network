import React from 'react';
import Dialogs from "./Dialogs";
import { updateNewMessageCreator, addNewMessageCreator } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer; 