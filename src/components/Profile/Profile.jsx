import cla from "./Profile.module.css"
import MyPosts from '../Profile/MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return(
        <div>
          <ProfileInfo />
          <div className={cla.posts}>
            <MyPosts 
                    postsData={props.profilePage.posts} 
                    addPost={props.addPost} 
                    newPostText={props.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
                    />
          </div>
        </div>
    );
}
export default Profile;