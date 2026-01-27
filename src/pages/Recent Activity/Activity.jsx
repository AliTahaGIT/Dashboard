import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import EditIcon from "@mui/icons-material/Edit";

import StorageIcon from "@mui/icons-material/Storage";
import SyncIcon from "@mui/icons-material/Sync";
import SecurityIcon from "@mui/icons-material/Security";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CloudOffIcon from "@mui/icons-material/CloudOff";

import './Activity.css'


const recentActivities = [
  // USER ACTIONS
  {
    id: 1,
    type: "user",
    Icon: PersonAddIcon,
    title: "New users registered",
    description: "5 new users signed up to the platform",
    time: "5 minutes ago",
  },
  {
    id: 2,
    type: "user",
    Icon: ShoppingCartCheckoutIcon,
    title: "Order completed",
    description: "Order ORD-1023 was successfully delivered",
    time: "45 minutes ago",
  },
  {
    id: 3,
    type: "user",
    Icon: EditIcon,
    title: "Profile updated",
    description: "Admin updated a user profile details",
    time: "2 hours ago",
  },

  // SYSTEM EVENTS
  {
    id: 4,
    type: "system",
    Icon: StorageIcon,
    title: "System maintenance",
    description: "Scheduled maintenance completed successfully",
    time: "Yesterday",
  },
  {
    id: 5,
    type: "system",
    Icon: SyncIcon,
    title: "Database synced",
    description: "All records synced with backup server",
    time: "Yesterday",
  },
  {
    id: 6,
    type: "system",
    Icon: SecurityIcon,
    title: "Security scan passed",
    description: "No vulnerabilities detected in latest scan",
    time: "2 days ago",
  },

  // ALERTS
  {
    id: 7,
    type: "alert",
    Icon: ErrorOutlineIcon,
    title: "High order volume",
    description: "Unusual spike in orders detected",
    time: "10 minutes ago",
  },
  {
    id: 8,
    type: "alert",
    Icon: LocalShippingIcon,
    title: "Shipment delayed",
    description: "Order ORD-1041 delivery delayed",
    time: "1 hour ago",
  },
  {
    id: 9,
    type: "alert",
    Icon: CloudOffIcon,
    title: "Server downtime",
    description: "One of the servers went offline",
    time: "3 hours ago",
  },
];



function Activity() {
  return (
    <div className="activity-main">
      <h1 className="activity-header">Recent Activity</h1>

      <div className="activity-cards-main">
        {recentActivities.map((activity) => (
          <div className="activity-card" key={activity.id}>
            <div className="activity-icon">
              <activity.Icon
                sx={{
                  fontSize: 32,
                  color: activity.type === "alert" ? "#dc2626" : "#3E8EF4",
                }}
              />
            </div>

            <div className="activity-content">
              <p className="activity-title">{activity.title}</p>

              <p className="activity-desc">
                {activity.description} – {" "} <span className="activity-time">{activity.time}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity