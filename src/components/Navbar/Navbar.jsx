import cla from "./Navbar.module.css"
import {NavLink} from 'react-router-dom'
import Friends from '../Friends/Friends'
const Navbar = () => {
    return(
        <nav className={cla.nav}>
        <div className={cla.item}>
          <NavLink to='/profile' activeClassName={cla.activeLink}>Profile</NavLink>
        </div>
        <div className={cla.item}>
          <NavLink to='/dialogs' activeClassName={cla.activeLink}>Messages</NavLink>
        </div>
        <div className={cla.item}>
          <NavLink to='/news' activeClassName={cla.activeLink} >News</NavLink>
        </div>
        <div className={cla.item}>
          <NavLink to='/music' activeClassName={cla.activeLink}>Music</NavLink>
        </div>
        <div className={cla.item}>
          <NavLink to='/settings' activeClassName={cla.activeLink}>Settings</NavLink>
        </div>
        <div className={cla.item}>
          <Friends />
        </div>
      </nav>
    );
}
export default Navbar;