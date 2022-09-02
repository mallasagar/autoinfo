import { Link} from "react-router-dom"

export function MyNav(){

    return(
        <div>
                <ul className="navbar">
                    <li className="logo"><Link to="/">AutoInfo</Link></li>
                    <li className="twowheel"><Link to="/bike">Bike</Link></li>
                    <li className="fourwheel"><Link to="/car">Car</Link></li>
                    <li className="gallery"><Link to="/gallery">Gallery</Link></li>
                    <li className="about"><Link to="/about">About</Link></li>
                </ul>
        </div>
    )
}