import React, { Component } from 'react';
import cla from './Dialogs.module.css'
import Message from './Dialog/Messages/Message'
import Friend from '../Friends/Friend/Friend'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';

const DialogsContainer =(props)=> {
        let state = props.store.getState().messagePage

        let onSendMessageClick =()=> {
            props.store.dispatch(sendMessageCreator())
        }
        let onNewMessageChange =(body)=> {
            props.store.dispatch(updateNewMessageBodyCreator(body))
        }
    return(
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagePage={state}/>
        );
}
export default DialogsContainer;