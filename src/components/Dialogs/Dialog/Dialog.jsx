import cla from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog =(props)=> {
    return (
        <div className={cla.dialog}>
        <NavLink to={'/dialogs/' + props.userId} activeClassName={cla.activeLink}>{props.userName}</NavLink>
    </div>
    );
}
export default Dialog;