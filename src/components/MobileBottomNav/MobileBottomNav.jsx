import { useLocation, useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import HistoryIcon from "@mui/icons-material/History";


import './MobileBottomNav.css'



const navbarItems = [
  { name: "Home", path: "/", Icon: HomeOutlinedIcon },
  { name: "Statistics", path: "/statistics", Icon: ShowChartIcon },
  { name: "Data Table", path: "/datatable", Icon: TableChartIcon },
  { name: "Charts", path: "/charts", Icon: InsertChartOutlinedIcon },
  { name: "Activity", path: "/activity", Icon: HistoryIcon },
];

function MobileBottomNav() {
    const location = useLocation();
    const activePath = location.pathname;
    const navigate = useNavigate();


    
  return (
    <div className='mobilenav-main'>
        {navbarItems.map((item) => (
            <li key={item.name} className={`mobilenav-list ${activePath === item.path ? "" : "NonActive"}`} onClick={() => navigate(item.path)}>
                <item.Icon
                  className="mobilenav-icon"
                  sx={{
                    fontSize: 28,
                    color: activePath === item.path ? "#183A7A" : "#1F1F1F",
                    transition: "color 0.2s ease",
                  }}
                />
                <span className={`mobilenav-name ${activePath === item.path ? 'activeText' : ''}`}>{item.name}</span>
            </li>
        ))}
    </div>
  )
}

export default MobileBottomNav