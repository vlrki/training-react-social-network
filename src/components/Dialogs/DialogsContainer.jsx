import React from 'react';
import Dialogs from "./Dialogs";
import { updateNewMessageCreator, addNewMessageCreator } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};


let AuthRedirectComponent = withAuthRedirect(Dialogs);


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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer; 