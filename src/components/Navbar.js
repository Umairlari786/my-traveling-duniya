import React from "react";
import "./navbar.css";
import { MenuItems } from "./menuItems";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome , faBan ,faBriefcase , faAddressBook , faUserPlus} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {clicked:false};
  handledClick = ()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">TripOnWeekend</h1>
        
        <div className="menu-icon" onClick=
        {this.handledClick}>
         <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
        </div>

        
        <ul className={this.state.clicked ?
        "na-menu active" :"na-menu"}>
            { MenuItems.map((item,index)=>{
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i  className={item.icon} />
                        {item.title}
                        </Link>
                    </li>
                )
            })}
              <button>SignUp</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
