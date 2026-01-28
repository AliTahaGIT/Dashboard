import React from 'react'
import './Statistics.css'

const dashboardMetrics = [
  {
    icon: "https://api.iconify.design/mdi:account-group.svg?color=%233E8EF4",
    name: "Total Users",
    value: "12,450",
    percentage: "+8.2%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:clipboard-list.svg?color=%233E8EF4",
    name: "Active Orders",
    value: "320",
    percentage: "-3.1%",
    trend: "down",
  },
  {
    icon: "https://api.iconify.design/mdi:cash-multiple.svg?color=%233E8EF4",
    name: "Revenue",
    value: "$48,900",
    percentage: "+12.5%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:chart-line.svg?color=%233E8EF4",
    name: "Conversion Rate",
    value: "4.6%",
    percentage: "+0.9%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:account-plus.svg?color=%233E8EF4",
    name: "New Signups",
    value: "186",
    percentage: "+15.4%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:alert-circle-outline.svg?color=%233E8EF4",
    name: "Pending Tasks",
    value: "27",
    percentage: "-5.0%",
    trend: "down",
  },
  {
    icon: "https://api.iconify.design/mdi:clock-outline.svg?color=%233E8EF4",
    name: "Avg. Session Time",
    value: "3m 42s",
    percentage: "+6.8%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:account-check-outline.svg?color=%233E8EF4",
    name: "Active Subscribers",
    value: "4,320",
    percentage: "-4.1%",
    trend: "down",
  },
  {
    icon: "https://api.iconify.design/mdi:cart-outline.svg?color=%233E8EF4",
    name: "Completed Orders",
    value: "1,248",
    percentage: "+9.7%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:backup-restore.svg?color=%233E8EF4",
    name: "Refund Requests",
    value: "19",
    percentage: "-12.3%",
    trend: "down",
  },
  {
    icon: "https://api.iconify.design/mdi:server-network.svg?color=%233E8EF4",
    name: "System Uptime",
    value: "99.98%",
    percentage: "+0.02%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:email-outline.svg?color=%233E8EF4",
    name: "Support Tickets",
    value: "64",
    percentage: "+3.6%",
    trend: "up",
  },
];




function Statistics() {
  return (
    <div className='stats-main'>
        <h1 className='stats-header'>Statistics</h1>
        <div className='stats-cards-main'>
            {dashboardMetrics.map((metric) => (
                <div className='stats-card' key={metric.name}>
                    <img alt={metric.name} src={metric.icon} className="stat-card-img"/>
                    <p className='stat-card-name'>{metric.name}</p>
                    <p className='stat-card-value'>{metric.value}</p>
                    <p className={`stat-card-percentage ${ metric.trend === "up" ? "trend-up" : "trend-down"}`}> {metric.trend === "up" ? "▲" : "▼"} {metric.percentage}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Statistics