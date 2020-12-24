import React, { Component } from 'react';
import cla from './Dialogs.module.css'
import Message from './Dialog/Messages/Message'
import Friend from '../Friends/Friend/Friend'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps =(state)=> {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps =(dispatch)=> {
    return {
        updateNewMessageBody: ()=> {dispatch(sendMessageCreator())},
        sendMessage: (body)=> {dispatch(updateNewMessageBodyCreator(body))}
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs) 

export default DialogsContainer;