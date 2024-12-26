import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css'
import { use, useEffect } from 'react';

export default function Navbar() {
    const location = useLocation()
    useEffect(() => {
        console.log(location)
    }, [])

    return (
        <div className='nav-bar'>
            <Link to="/" className='nav-btn'>
                <img src="house.png" alt="home" className={location.pathname === "/" ? "icon-active" : "icon"} />
            </Link>
            <Link to="/map" className='nav-btn'>
                <img src="map.png" alt="map" className={location.pathname === "/map" ? "icon-active" : "icon"} />
            </Link>
            <Link to="/raccoon" className='nav-btn'>
                <img src="raccoon-icon.png" alt="raccoon" className={location.pathname === "/raccoon" ? "icon-active" : "icon"} />
            </Link>
            <Link to="/inbox" className='nav-btn'>
                <img src="chat.png" alt="chat" className={location.pathname === "/inbox" ? "icon-active" : "icon"} />
            </Link>
            <Link to="/profile" className='nav-btn'>
                <img src="profile.png" alt="profile" className={location.pathname === "/profile" ? "icon-active" : "icon"} />
            </Link>
        </div>

    )
}