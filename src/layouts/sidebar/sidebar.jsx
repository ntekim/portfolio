import './sidebar.css'
import {
    Route,
    Link,
    NavLink
  } from "react-router-dom";

export function Sidebar() {
   return (
    <aside className="sidebar" id="sidebar">
        <nav id="nav">
            <div className="nav_logo">
                <a href="" className="nav_logo-text">JN</a>
            </div>
            <div className="nav_menu">
                <div className="menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <NavLink to="/" className="nav_link">Home</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/about" className="nav_link">About</NavLink>
                        </li>
                        {/* <li className="nav_item">
                            <Link to="#skills" className="nav_link">Skills</Link>
                        </li> */}
                        <li className="nav_item">
                            <Link to="#serviecs" className="nav_link">Services</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="#project" className="nav_link">Projects</Link>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/contact" className="nav_link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="btn_share">
                <i className="uil uil-share-alt social_share"></i>
            </div>
        </nav>
    </aside>
   )
}