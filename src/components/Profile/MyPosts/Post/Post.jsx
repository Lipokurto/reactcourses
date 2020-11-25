import cla from "./Post.module.css"

const Post = (props) => {
return (
          <div className={cla.item}>
            <img alt ='' src='https://static-s.aa-cdn.net/img/ios/1310568078/895bc14e6e273ccbb5a85698b28c1a16'></img>
            {props.message}
            <div>
            <span>{props.likecount} like</span>
            </div>
          </div>
);
}
export default Post;