import Logo from "../assets/Logo.png";


function Navbar()
{
    return(
    <nav className="nav">
        <a href="#">
            <img src = {Logo} alt = "logo" />
        </a>
    </nav>
    );  
}

export default Navbar;