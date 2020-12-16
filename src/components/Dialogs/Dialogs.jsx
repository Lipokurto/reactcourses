import React, { Component } from 'react';
import cla from './Dialogs.module.css'
import Message from './Dialog/Messages/Message'
import Friend from '../Friends/Friend/Friend'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';

const Dialogs =(props)=> {
        let state = props.store.getState().messagePage
        let messagesElements = state.message.map( m => <Message messageText={m.messageText}/>);
        let friendsElements = state.dialogs.map(d => <Friend name={d.userName} src={d.ava} />)
        let newMessageBody = state.newMessageBody
        let newMessage = React.createRef();

        const sendMessage =() => {
            let text = newMessage.current.value;
            alert(text)
        }
        let onSendMessageClick =()=> {
            props.store.dispatch(sendMessageCreator())
        }
        let onNewMessageChange =(e)=> {
            let body = e.target.value
            props.store.dispatch(updateNewMessageBodyCreator(body))
        }
        debugger;
    return(
        <div className={cla.dialogs}>
            <div className={cla.dialogsItems}>
            {friendsElements}
            </div>
            <div className={cla.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea  value={newMessageBody} 
                                    onChange={onNewMessageChange}
                                    placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        <div>
            <div>
                
            </div>
            <div>
                
            </div>
        </div>
        </div>
        );
}
export default Dialogs;