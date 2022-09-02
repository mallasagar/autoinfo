import { NavLink} from "react-router-dom"
import "./navbar.component.css"
import "../../root.css"

export function MyNav(){

    return(
                <div className="navbar">
                    <div className="logo"><NavLink to="/">AutoInfo</NavLink></div>
                    <div className="twowheel"><NavLink to="/bike">Bike</NavLink></div>
                    <div className="fourwheel"><NavLink to="/car">Car</NavLink></div>
                    <div className="gallery"><NavLink to="/gallery">Gallery</NavLink></div>
                    <div className="about"><NavLink to="/about">About</NavLink></div>
                </div>
    )
}