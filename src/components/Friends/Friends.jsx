import cla from './Friends.module.css'
import Friend from './Friend/Friend'

const Friends =(props)=> {
  
  let friendElements = props.state.dialogs.map((d)=> <Friend name={d.userName} src={d.ava}/>)
    return (
      <div className={cla.item}>
      <div className={cla.container}>
        {friendElements}
      </div>
    </div>
    );
  }
  export default Friends;