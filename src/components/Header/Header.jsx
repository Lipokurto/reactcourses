import { NavLink } from 'react-router-dom'
import cla from './Header.module.css'

const Header = (props) => {
    return (
        <header className={cla.header}>
          <img className={`${cla.header} ${cla.img}`}  alt=''src='https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'></img>
          <div className={cla.loginBlock}>
            {props.isAuth ? props.login :
              <NavLink to={'/login'}>Login</NavLink>}
          </div>
        </header>
    );
}
export default Header;