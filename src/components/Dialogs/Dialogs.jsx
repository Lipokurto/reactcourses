// import { NavLink } from 'react-router-dom'
import cla from './Dialogs.module.css'
// import Dialog from './Dialog/Dialog'
import Message from './Dialog/Messages/Message'
import Friend from '../Friends/Friend/Friend'

const Dialogs =(props)=> {
        let messagesElements = props.state.message.map( m => <Message messageText={m.messageText}/>);
        let friendsElements = props.state.dialogs.map(d => <Friend name={d.userName} src={d.ava} />)
    return(
        <div className={cla.dialogs}>
            <div className={cla.dialogsItems}>
            {friendsElements}
            </div>
            <div className={cla.messages}>
                {messagesElements}
            </div>
        </div>
        );
}
export default Dialogs;