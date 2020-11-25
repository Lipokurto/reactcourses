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
                <img alt='' src='https://guilds.gw2w2w.com/guilds/the-pug-smugglers/256.svg' />
            </div>
            <div className={cla.discr}>Jepa</div>
    </div>
    );
}
const ProfileInfo =(props)=> {
    return (
        <div className='mainPro'>
            <MainImg />
            <AvaDis />
        </div>
    );
} 
export default ProfileInfo;