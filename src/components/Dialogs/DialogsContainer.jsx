import React from 'react';
import Dialogs from "./Dialogs";

import {updateNewMessageCreator, addNewMessageCreator} from "../../redux/dialogs-reducer";
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
            
                let onNewMessageChange = (message) => {
                    store.dispatch(updateNewMessageCreator(message));
                };
            
                let onSendMessageClick = () => {
                    store.dispatch(addNewMessageCreator());
                };            
                
                
                return <Dialogs
                    onNewMessageChange={onNewMessageChange}
                    onSendMessageClick={onSendMessageClick}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageText={state.dialogsPage.newMessageText}
                />
            }
        }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;