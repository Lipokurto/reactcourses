const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogs : [
    {userId:1,userName:'Bassist',ava:'https://f1.upet.com/A_r2u6uZhnxA_x.jpg'},
    {userId:2,userName:'Jepa',ava:'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/10/klevye-kartinki-dlya-srisovki-2.png'},
    {userId:3,userName:'KotoJop',ava:'https://i.pinimg.com/236x/5b/e1/75/5be17525ba53cfd0a55f0d1c994ab180.jpg'},        
  ],
  message: [
    {Id:1,messageText:'Sam Jepa,pidor!'},
    {Id:2,messageText:'Karamislo'},
    {Id:3,messageText:'FUNTIK!!!'}
  ],
  newMessageBody: ''
  }

const messageReducer =(state = initialState,action)=> {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.message.push({Id:4,messageText:body})
            return state
        default:
            return state
    }   
}
export const sendMessageCreator =()=> {
    return {
      type: SEND_MESSAGE
    }
  }
  export const updateNewMessageBodyCreator =(body)=> {
    return {
      type: UPDATE_NEW_MESSAGE_BODY, body:body
    }
  }

export default messageReducer