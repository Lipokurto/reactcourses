import cla from './Header.module.css'
const Header = () => {
    return (
        <header className={cla.header}>
        <img className={`${cla.header} ${cla.img}`}  alt=''src='https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'></img>
      </header>
    );
}
export default Header;