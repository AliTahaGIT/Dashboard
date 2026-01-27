import Avatar from '@mui/material/Avatar';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import './Navbar.css'

function Navbar({ onOpenMobileSidebar }) {
  return (
    <div className='nav-main'>
        <div className='nav-left'>
            <p className='burgerMenu' onClick={ onOpenMobileSidebar }>☰</p>
            <div className='nav-top'>
                <h1 className='nav-header'>Welcome Mr. Ali Taha</h1>
                <span className='nav-date'>{new Date().toLocaleDateString("en-GB")}</span>
            </div>
        </div>


        <div className='nav-right'>
            <div className="nav-icon">
                <img src="https://api.iconify.design/mdi:bell-outline.svg?color=%2300000" alt="notifications" className="nav-img"/>
                <span className="noti-badge">12</span>
            </div>
            <div className='nav-pfp'>
                <Avatar alt="User" src="https://randomuser.me/api/portraits/men/18.jpg" sx={{ width: 45, height: 45 }} />
                <MoreVertIcon className="pfp-arrow"/>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar