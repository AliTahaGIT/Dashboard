import { useLocation, useNavigate } from "react-router-dom";

import './MobileBottomNav.css'



const navbarItems = [
  {
    name: "Home",
    path: "/",
    iconUrl: "https://api.iconify.design/mdi:home-outline.svg?color=%231F1F1F",
  },
  {
    name: "Statistics",
    path: "/statistics",
    iconUrl: "https://api.iconify.design/mdi:chart-line.svg?color=%231F1F1F",
  },
  {
    name: "Data Table",
    path: "/datatable",
    iconUrl: "https://api.iconify.design/mdi:table.svg?color=%231F1F1F",
  },
  {
    name: "Charts",
    path: "/charts",
    iconUrl: "https://api.iconify.design/mdi:chart-box-outline.svg?color=%231F1F1F",
  },
  {
    name: "Recent Activity",
    path: "/activity",
    iconUrl: "https://api.iconify.design/mdi:history.svg?color=%231F1F1F",
  },
];

function MobileBottomNav() {
    const location = useLocation();
    const activePath = location.pathname;
    const navigate = useNavigate();


    
  return (
    <div className='mobilenav-main'>
        {navbarItems.map((item) => (
            <li className={`mobilenav-list ${activePath === item.path ? "active" : ""}`}>
                <img key={item.path} className='mobilenav-icon' src={item.iconUrl} alt={item.name} onClick={() => navigate(item.path)}/>
            </li>
        ))}
    </div>
  )
}

export default MobileBottomNav