import cla from './Friend.module.css'

const Friend =(props)=> {
    return (
        <div className={cla.item}>
        <img alt='' src={props.src}></img>
    <div className={cla.item}>{props.name}</div>
        </div>
    );
}
export default Friend;