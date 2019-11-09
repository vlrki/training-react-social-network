import React from 'react';
import Dialogs from "./Dialogs";

import {updateNewMessageCreator, addNewMessageCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onNewMessageChange = (message) => {
        props.store.dispatch(updateNewMessageCreator(message));
    };

    let onSendMessageClick = () => {
        props.store.dispatch(addNewMessageCreator());
    };

    return (
        <Dialogs
            onNewMessageChange={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
        />
    );
};

export default DialogsContainer;