import Preloader from '../../../common/preloader/Preloader';
import cla from './ProfileInfo.module.css'

const MainImg =(props)=> {
    return (
        <div className={cla.imgTop}>
        <img alt ='' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'></img>
    </div>
    );
}

const AvaDis =(props)=>{
    return(
        <div className={cla.mainPro}>
            <div className={cla.ava}>
                <img alt='' src={props.src} />
            </div>
            <div className={cla.discr}>Jepa</div>
    </div>
    );
}
const ProfileInfo =(props)=> {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className='mainPro'>
            <MainImg />
            <AvaDis src={props.profile.photos.large}/>
        </div>
    );
} 
export default ProfileInfo;