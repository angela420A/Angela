import '../styles/NavBar.css'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function NavBar(){
    const iconSize = 20;

    return(
        <nav className="navbar">
            <div className="logo">
                <a href="#">Angela Kuo</a>
            </div>
            <div className="navbar-content">
                <ul className="nav-content-item nav-link">
                    <li href="#home-page">
                        Home
                    </li>
                    <li href="#about-page">
                        About
                    </li>
                    <li href="#">
                        Experience
                    </li>
                    <li href="#">
                        Projects
                    </li>
                </ul>
                <div className="nav-content-item nav-connect">
                    <a href="#">
                        <MdOutlineEmail size={iconSize} />
                    </a>
                    <a href="#">
                        <FaGithub size={iconSize} />
                    </a>
                    <a href="#">
                        <FaLinkedin size={iconSize} />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;