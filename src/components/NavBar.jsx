import '../styles/NavBar.css'

function NavBar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <a href="#">Angela Kuo</a>
            </div>
            <div className="navbar-content">
                <ul className="nav-content-item nav-links">
                    <li className="nav-link" href="#">
                        Home
                    </li>
                    <li className="nav-link" href="#">
                        About
                    </li>
                    <li className="nav-link" href="#">
                        Experience
                    </li>
                    <li className="nav-link" href="#">
                        Projects
                    </li>
                </ul>
                <div className="nav-content-item nav-connect">
                    <a href="#">Email</a>
                    <a href="#">Github</a>
                    <a href="#">Linkedin</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;