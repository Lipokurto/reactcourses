import cla from './Friend.module.css'

const Friend =(props)=> {
    return (
        <div>
        <img alt='' src='https://f1.upet.com/A_r2u6uZhnxA_x.jpg'></img>
        <div className={cla.item}>FriendName</div>
        </div>
        
    );
}
export default Friend;