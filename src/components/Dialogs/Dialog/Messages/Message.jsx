import cla from './Message.module.css'

const Message =(props)=> {
    return(
        <div className={cla.message}>
        {props.messageText}
    </div>
    );
} 
export default Message;