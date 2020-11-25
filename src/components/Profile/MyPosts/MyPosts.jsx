import cla from "./MyPosts.module.css"
import Post from "./Post/Post" 

const MyPosts = (props) => {
let postsElemets = props.postsData.map((p)=><Post message={p.message} likecount={p.likecount}/>)

return (
  <div>
  <div className={cla.item}>
  <h3>My posts</h3>
  </div>
    <div className={cla.item}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
    </div>
    <div className={cla.posts}>
      {postsElemets}
    </div>
  </div>
);
}
export default MyPosts;