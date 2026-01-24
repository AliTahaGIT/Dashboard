import { useNavigate, useLocation } from "react-router-dom";
import './MobileSideBar.css'


const navbarItems = [
  {
    name: "Home",
    path: "/",
    iconUrl: "https://api.iconify.design/mdi:home-outline.svg?color=%23F7F6F2",
  },
  {
    name: "Statistics",
    path: "/statistics",
    iconUrl: "https://api.iconify.design/mdi:chart-line.svg?color=%23F7F6F2",
  },
  {
    name: "Data Table",
    path: "/datatable",
    iconUrl: "https://api.iconify.design/mdi:table.svg?color=%23F7F6F2",
  },
  {
    name: "Charts",
    path: "/charts",
    iconUrl: "https://api.iconify.design/mdi:chart-box-outline.svg?color=%23F7F6F2",
  },
  {
    name: "Recent Activity",
    path: "/activity",
    iconUrl: "https://api.iconify.design/mdi:history.svg?color=%23F7F6F2",
  },
];


function MobileSideBar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className={`msb ${isOpen ? "msb-open" : ""}`}>
      <div className="msb-overlay" onClick={onClose} />

      <div className="msb-panel">
        <div className="msb-top">
          <button className="msb-close" onClick={onClose} aria-label="Close menu">
            X
          </button>
        </div>

        <ul className="msb-items">
          {navbarItems.map((item) => (
            <li
              key={item.path}
              className={`msb-item ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => goTo(item.path)}
            >
              <img src={item.iconUrl} alt={item.name} className="msb-img" />
              <span className="msb-label">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileSideBar;
