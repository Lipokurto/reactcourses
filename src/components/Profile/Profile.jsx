import cla from "./Profile.module.css"
import MyPosts from '../Profile/MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
   
    return(
        <div>
          <ProfileInfo />
          <div className={cla.posts}>
            <MyPosts postsData={props.state.posts}/>
          </div>
        </div>
    );
}
export default Profile;