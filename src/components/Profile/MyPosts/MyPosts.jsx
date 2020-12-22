import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import cla from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = (props) => {
let postsElemets = props.posts.map((p)=><Post message={p.message} likecount={p.likecount}/>)
let newPostElement = React.createRef();

const onAddPost =()=> {
  props.addPosts()
}

let onPostChange =()=> {
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
          <button onClick={onAddPost}>Add post</button>
        </div>
    </div>
    <div className={cla.posts}>
      {postsElemets}
    </div>
  </div>
);
}
export default MyPosts;