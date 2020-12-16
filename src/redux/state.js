const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state : {

      profilePage: {    
        posts: [
        {id:1,message:'Hi, how are you?',likecount:7},
        {id:2,message:"It's my first post!",likecount:3} 
      ],
        newPostText : 'Мой новый пост'
    },
    messagePage : {
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
        },
        sidebar: {}
      },
    _callSubscriber() {
      console.log('state was changed')
    },
    getState() {
      return  this._state
    },
    subscribe(observer) {
      this._callSubscriber = observer;
      },

    dispatch(action){
      if(action.type === ADD_POST) {
        let newPost ={
          id:5,
          message: this._state.profilePage.newPostText,
          likecount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)

      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.text
        this._callSubscriber(this._state)

      } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
        this._state.messagePage.newMessageBody = action.body
        this._callSubscriber(this._state)

      } else if (action.type === SEND_MESSAGE) {
        let body = this._state.messagePage.newMessageBody
        this._state.messagePage.newMessageBody = ''
        this._state.messagePage.message.push({Id:4,messageText:body})
        this._callSubscriber(this._state)
      }
    }
  }
  
  export const addPostActionCreator =()=> {
    return {
      type: ADD_POST
    }
  }
  
  export const updateNewPostTextActionCreator =(text)=> {
    return {
      type: UPDATE_NEW_POST_TEXT, text:text
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
export default store;
window.store = store;
  


  




