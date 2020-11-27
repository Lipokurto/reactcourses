import React, { Component } from 'react';
import cla from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
let postsElemets = props.postsData.map((p)=><Post message={p.message} likecount={p.likecount}/>)

let newPostElement = React.createRef();

const addPosts =()=> {
  props.addPost()
  props.updateNewPostText('')
}

let onPostChange =()=> {
  debugger;
  let text = newPostElement.current.value;
  props.updateNewPostText(text)
  
}

return (
  <div>
  <div className={cla.item}>
  <h3>My posts</h3>
  </div>
    <div className={cla.item}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPosts}>Add post</button>
        </div>
    </div>
    <div className={cla.posts}>
      {postsElemets}
    </div>
  </div>
);
}
export default MyPosts;