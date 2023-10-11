import './Navbar.css'
function Navbar() {
  return (
    <div>
        <div className="scroll-up-btn">
            <i className="bx bx-up-arrow-alt bx-sm"></i>
        </div>
        <div className="showcase">
            <nav className="navbar">
                <h3 className="logo">Logo</h3>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
