import cla from "./Navbar.module.css"
import {NavLink} from 'react-router-dom'
import Friend from '../Friends/Friend/Friend'
const Navbar = (props) => {
  // let friendsElements = props.state.dialogs.map(d => <Friend name={d.userName} src={d.ava} />)
    return(
        <nav className={cla.nav}>
        <div className={cla.item}>
          <NavLink to='/profile' activeClassName={cla.activeLink}>Profile</NavLink>
        </div>
        <div className={cla.item}>
          <NavLink to='/dialogs' activeClassName={cla.activeLink}>Messages</NavLink>
        </div>
        <div className={cla.item}>
          <NavLink to='/users' activeClassName={cla.activeLink} >Users</NavLink>
        </div>
        <div className={cla.item}>
          <NavLink to='/music' activeClassName={cla.activeLink}>Music</NavLink>
        </div>
        <div className={cla.item}>
          <NavLink to='/settings' activeClassName={cla.activeLink}>Settings</NavLink>
        </div>
        <div className={cla.item}>
        <h1>Friends</h1>
        <div className={cla.container}>
          {/* {friendsElements} */}
          </div>
        </div>
      </nav>
    );
}
export default Navbar;