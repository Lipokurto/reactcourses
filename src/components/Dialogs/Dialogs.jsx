import React from 'react';
import cla from './Dialogs.module.css'
import Message from './Dialog/Messages/Message'
import Friend from '../Friends/Friend/Friend'
import { Redirect } from 'react-router-dom';

const Dialogs =(props)=> {
        let state = props.messagePage

        let messagesElements = state.message.map( m => <Message messageText={m.messageText} key={m.id} id={m.id}/>);
        let friendsElements = state.dialogs.map(d => <Friend name={d.userName} src={d.ava} key={d.id} id={d.id}/>)
        let newMessageBody = state.newMessageBody
        let onSendMessageClick =()=> {
            props.sendMessage()
        }
        let onNewMessageChange =(e)=> {
            let body = e.target.value
            props.updateNewMessageBody(body)
        }
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