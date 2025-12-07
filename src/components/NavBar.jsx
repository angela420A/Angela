import '../styles/NavBar.css'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function NavBar(){
    const iconSize = 23;

    return(
        <nav className="navbar">
            <div className="logo">
                <a href="#">Angela Kuo</a>
            </div>
            <div className="navbar-content">
                <ul className="nav-content-item nav-link">
                    <li href="#">
                        Home
                    </li>
                    <li href="#">
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
                    <div>
                        <MdOutlineEmail size={iconSize} />
                    </div>
                    <div>
                        <FaGithub size={iconSize} />
                    </div>
                    <div>
                        <FaLinkedin size={iconSize} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;