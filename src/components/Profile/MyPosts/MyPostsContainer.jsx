import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mpStateToprops =(state)=> {
  return {
    posts: state.profilePage.posts,
    postsData: state.profilePage.newPostText
  }
}
let mapDispatchToProps=(dispatch)=> {
  return {
    updateNewPostText: (text)=> { 
              let action = updateNewPostTextActionCreator(text)
              dispatch(action)
            },
    addPosts: ()=> {dispatch(addPostActionCreator())}
  }
}
const MyPostsContainer = connect(mpStateToprops,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;