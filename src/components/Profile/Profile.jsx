import cla from "./Profile.module.css"
import MyPosts from '../Profile/MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return(
        <div>
          <ProfileInfo />
          <div className={cla.posts}>
            <MyPostsContainer store={props.store}
                    />
          </div>
        </div>
    );
}
export default Profile;