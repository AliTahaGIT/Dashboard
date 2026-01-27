import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from '@mui/material/IconButton';
import IMG from '../assets/ALI IMG.jpg'


import './Navbar.css'

function Navbar({isOpen, Open}) {
  return (
    <div className='nav-main'>
        <div className='nav-left'>
            <IconButton className='nav-sidebarIcon' onClick={Open}>
                {isOpen ? <ChevronLeftIcon sx={{ width: 30, height: 30 }}/> : <ChevronRightIcon sx={{ width: 30, height: 30 }}/>}
            </IconButton>
        </div>


        <div className='nav-right'>
            <div className="nav-icon">
                <img src="https://api.iconify.design/mdi:bell-outline.svg?color=%2300000" alt="notifications" className="nav-img"/>
                <span className="noti-badge">12</span>
            </div>
            <div className='nav-pfp'>
                <Avatar alt="User" src={IMG} sx={{ width: 55, height: 55 }} />
                <div className='nav-pfp-info'>
                    <span className='nav-pfp-info-name'>Mr. Ali Taha</span>
                    <span className='nav-pfp-info-date'>{new Date().toLocaleDateString("en-GB")}</span>
                </div>
                <ExpandMoreIcon className="pfp-arrow"/>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar