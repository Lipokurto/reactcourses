import cla from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return(
        <div>
          <ProfileInfo profile={props.profile}/>
          <div className={cla.posts}>
            <MyPostsContainer/>
          </div>
        </div>
    );
}
export default Profile;