import React from 'react';

import s from './../Dialogs.module.css';

const DialogMessage = (props) => {
    return (
        <div className={s.messages_item}>{props.message}</div>
    );
}

export default DialogMessage;