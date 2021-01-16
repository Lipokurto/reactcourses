import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps =(state)=> {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps =(dispatch)=> {
    return {
        sendMessage: ()=> {dispatch(sendMessageCreator())},
        updateNewMessageBody: (body)=> {dispatch(updateNewMessageBodyCreator(body))}
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent) 

export default DialogsContainer;