import React, { Component } from 'react';
import cla from './Dialogs.module.css'
import Message from './Dialog/Messages/Message'
import Friend from '../Friends/Friend/Friend'

const Dialogs =(props)=> {
        let messagesElements = props.state.message.map( m => <Message messageText={m.messageText}/>);
        let friendsElements = props.state.dialogs.map(d => <Friend name={d.userName} src={d.ava} />)
        
        let newMessage = React.createRef();

        const sendMessage =() => {
            let text = newMessage.current.value;
            alert(text)
        }
    return(
        <div className={cla.dialogs}>
            <div className={cla.dialogsItems}>
            {friendsElements}
            </div>
            <div className={cla.messages}>
                {messagesElements}
            </div>
        <div>
            <div>
                <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
        </div>
        );
}
export default Dialogs;