const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {    
  posts: [
  {id:1,message:'Hi, how are you?',likecount:7},
  {id:2,message:"It's my first post!",likecount:3} 
],
  newPostText : 'Мой новый пост'
}

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost ={
                id:5,
                message: state.newPostText,
                likecount: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
          }
        case UPDATE_NEW_POST_TEXT: {
          let stateCopy = {...state}
          stateCopy.newPostText = action.text      
            return stateCopy;
        }
        default:
            return state;
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
export default profileReducer