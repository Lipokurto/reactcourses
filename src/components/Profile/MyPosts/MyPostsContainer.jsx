import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import store from '../../../redux/redux-store';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

let state = props.store.getState()

const addPosts =()=> {
  props.store.dispatch(addPostActionCreator())
}

let onPostChange =(text)=> {
  let action = updateNewPostTextActionCreator(text)
  props.store.dispatch(action)
}
debugger;
return (
    
<MyPosts updateNewPostText={onPostChange} 
addPosts={addPosts} 
posts={state.profilePage.posts} 
postsData={state.profilePage.newPostText}/>
);
}
export default MyPostsContainer;