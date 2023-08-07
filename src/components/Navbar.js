import React from "react";
import "./navbar.css";
import { MenuItems } from "./menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome , faBan ,faBriefcase , faAddressBook , faUserPlus} from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">TripOnWeekend</h1>
        <ul className="na-menu">
            { MenuItems.map((item,index)=>{
                return(
                    <li key={index}>
                        <a href="/">
                        <FontAwesomeIcon  className={item.icon} />
                        {item.title}
                        </a>
                    </li>
                )
            })}
    
        </ul>
      </nav>
    );
  }
}

export default Navbar;
