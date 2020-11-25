// import { NavLink } from 'react-router-dom'
import cla from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Dialog/Messages/Message'

const Dialogs =(props)=> {
    console.log(props.state.dialogs)
    let dialogsElements =  props.state.dialogs.map( d => <Dialog userId={d.userId} userName={d.userName}/>);
    console.log(dialogsElements)
    let messagesElements = props.state.message.map( m => <Message messageText={m.messageText}/>);
    
    return(
        <div className={cla.dialogs}>
            <div className={cla.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cla.messages}>
                {messagesElements}
            </div>
        </div>
        );
}
export default Dialogs;