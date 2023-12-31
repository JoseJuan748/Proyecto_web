import { Link } from "react-router-dom";
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <div className="Con">
      <nav className="navbar">
          <ul className="nav-list">
              <li className="nav-item dropdown"> <img className="MenuI" src="Menu.png" alt="" />
                <ul className="dropdown-menu">
                  <li className="nav-item"><Link to={"/MainApp"}>Portafolio</Link></li>
                  <li><Link to={"/Calculadora"}>Calculadora</Link></li>
                  <li><Link to={"/Encuesta"}>Encuesta</Link></li>
                  <li> <Link to={"/Numeromagico"}>Numeromagico</Link></li>
                  <li><Link to={"/Lista"}>Lista</Link></li>
                  <li><Link to={"/Contacto"}>Contacto</Link></li>
                </ul>
              </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
