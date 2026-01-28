import { useLocation, useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";


import './MobileBottomNav.css'



const navbarItems = [
  { name: "Home", path: "/", Icon: HomeOutlinedIcon },
  { name: "Statistics", path: "/statistics", Icon: ShowChartOutlinedIcon },
  { name: "Data Table", path: "/datatable", Icon: TableChartOutlinedIcon },
  { name: "Charts", path: "/charts", Icon: InsertChartOutlinedIcon },
  { name: "Recent Activity", path: "/activity", Icon: HistoryOutlinedIcon },
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