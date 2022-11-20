import { NavLink} from "react-router-dom"
import "./navbar.component.css"
import "../../root.css"

export function MyNav(){

    return (
        
        <div className="navbar">
            <div className="title"><NavLink to='/'>AutoInfo</NavLink></div>
            <div className="navmenu">
                <ul className="navlink">
                     <li className="about"><NavLink to="/about">About</NavLink></li>
                     <li className="fourwheel"><NavLink to="/car">Car</NavLink></li>
                     <li className="twowheel"><NavLink to="/bike">Bike</NavLink></li>
                     <li className="gallery"><NavLink to="/gallery">Gallery</NavLink></li>
                    <li className="contact"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>




        // <div>
        //             <li className="logo"><NavLink  to="/">AutoInfo</NavLink></li>

        //         <ul className="navbar">
        //             <li className="fourwheel"><NavLink to="/car">Car</NavLink></li>
        //             <li className="twowheel"><NavLink to="/bike">Bike</NavLink></li>
        //             <li className="gallery"><NavLink to="/gallery">Gallery</NavLink></li>
        //             <li className="about"><NavLink to="/about">About</NavLink></li>
        //             <li className="contact"><NavLink to="/contact">Contact</NavLink></li>
        //         </ul>
        // </div>
    )
}
