import './NavBar.css';
import Routs from '../../config/Routs';
import {MdOutlineDarkMode} from "react-icons/md"


const NavBar = () => {
    return (
        <div className='Nav'>
                <a className='logo'>Camila<br/>Carvalho</a>
            <ul className='Nav-ul'>
            <li id="modes"><MdOutlineDarkMode className="dark-mode-icon" size={24}/></li>
                <li><a href="">My Projects</a> </li>
                <li><a href="">About me</a> </li>
                <li><a href="">Contact</a> </li>
            </ul>
        </div>
    )
}

export default NavBar