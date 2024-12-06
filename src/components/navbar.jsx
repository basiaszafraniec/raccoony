import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div className='nav-bar'>
            <Link to="/feed" className='nav-btn'>
                feed
            </Link>
            <Link to="/map" className='nav-btn'>
                map
            </Link>
            <Link to="/raccoon" className='nav-btn'>
                raccoon
            </Link>
            <Link to="/inbox" className='nav-btn'>
                inbox
            </Link>
            <Link to="/profile" className='nav-btn'>
                profile
            </Link>
        </div>

    )
}