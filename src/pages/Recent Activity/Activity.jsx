import React from 'react'
import './Activity.css'


const recentActivities = [
  // USER ACTIONS
  {
    id: 1,
    type: "user",
    icon: "https://api.iconify.design/mdi:account-plus.svg?color=%231F7D53",
    title: "New users registered",
    description: "5 new users signed up to the platform",
    time: "5 minutes ago",
  },
  {
    id: 2,
    type: "user",
    icon: "https://api.iconify.design/mdi:cart-check.svg?color=%231F7D53",
    title: "Order completed",
    description: "Order ORD-1023 was successfully delivered",
    time: "45 minutes ago",
  },
  {
    id: 3,
    type: "user",
    icon: "https://api.iconify.design/mdi:account-edit.svg?color=%231F7D53",
    title: "Profile updated",
    description: "Admin updated a user profile details",
    time: "2 hours ago",
  },

  // SYSTEM EVENTS
  {
    id: 4,
    type: "system",
    icon: "https://api.iconify.design/mdi:server.svg?color=%231F7D53",
    title: "System maintenance",
    description: "Scheduled maintenance completed successfully",
    time: "Yesterday",
  },
  {
    id: 5,
    type: "system",
    icon: "https://api.iconify.design/mdi:database-sync.svg?color=%231F7D53",
    title: "Database synced",
    description: "All records synced with backup server",
    time: "Yesterday",
  },
  {
    id: 6,
    type: "system",
    icon: "https://api.iconify.design/mdi:shield-check.svg?color=%231F7D53",
    title: "Security scan passed",
    description: "No vulnerabilities detected in latest scan",
    time: "2 days ago",
  },

  // ALERTS
  {
    id: 7,
    type: "alert",
    icon: "https://api.iconify.design/mdi:alert-circle.svg?color=%23dc2626",
    title: "High order volume",
    description: "Unusual spike in orders detected",
    time: "10 minutes ago",
  },
  {
    id: 8,
    type: "alert",
    icon: "https://api.iconify.design/mdi:truck-alert.svg?color=%23dc2626",
    title: "Shipment delayed",
    description: "Order ORD-1041 delivery delayed",
    time: "1 hour ago",
  },
  {
    id: 9,
    type: "alert",
    icon: "https://api.iconify.design/mdi:server-off.svg?color=%23dc2626",
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
              <img src={activity.icon} alt={activity.title} />
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