import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from '@mui/material/IconButton';
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import IMG from '../assets/ALI IMG.jpg'


import './Navbar.css'

function Navbar({isOpen, Open}) {
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);
    const navigate = useNavigate();



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
            <div className='nav-pfp' onClick={(e) => setAnchor(e.currentTarget)}>
                <Avatar alt="User" src={IMG} sx={{ width: 55, height: 55 }} />
                <div className='nav-pfp-info'>
                    <span className='nav-pfp-info-name'>Mr. Ali Taha</span>
                    <span className='nav-pfp-info-date'>{new Date().toLocaleDateString("en-GB")}</span>
                </div>
                <ExpandMoreIcon className="pfp-arrow"/>
            </div>

            <Menu
                anchorEl={anchor}
                open={open}
                onClose={() => setAnchor(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                PaperProps={{
                    sx: {
                        borderRadius: '15px',
                    }
                }}
            >
                <MenuItem onClick={() => {setAnchor(null); navigate("/profile");}}>
                    <ListItemIcon>
                        <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>View Profile</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => setAnchor(null)}>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </MenuItem>
            </Menu>
        </div>
        
    </div>
  )
}

export default Navbar