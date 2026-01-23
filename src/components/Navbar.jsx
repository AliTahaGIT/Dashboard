import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-main'>
        <div className='nav-left'>
            <h1>Welcome Admin</h1>
            <div className="nav-icon">
                <img src="https://api.iconify.design/mdi:bell-outline.svg?color=%23F7F6F2" alt="notifications" className="nav-img"/>
                <span className="noti-badge">12</span>
            </div>
        </div>

        <div className='nav-pfp'>
            <img alt='pfp' src='https://api.iconify.design/mdi:account-circle.svg?color=%23F7F6F2' className='pfp-img'/>
            <p className='pfp-arrow'>⌄</p>
        </div>
    </div>
  )
}

export default Navbar