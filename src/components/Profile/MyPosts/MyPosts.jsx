import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import cla from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = (props) => {
let postsElemets = props.postsData.map((p)=><Post message={p.message} likecount={p.likecount}/>)

let newPostElement = React.createRef();

const addPosts =()=> {
  props.dispatch(addPostActionCreator())
}

let onPostChange =()=> {
  let text = newPostElement.current.value;
  let action = updateNewPostTextActionCreator(text)
  props.dispatch(action)
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