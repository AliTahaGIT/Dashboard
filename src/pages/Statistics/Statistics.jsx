import React from 'react'
import './Statistics.css'

const dashboardMetrics = [
  {
    icon: "https://api.iconify.design/mdi:account-group.svg?color=%230E3B2E",
    name: "Total Users",
    value: "12,450",
    percentage: "+8.2%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:clipboard-list.svg?color=%230E3B2E",
    name: "Active Orders",
    value: "320",
    percentage: "-3.1%",
    trend: "down",
  },
  {
    icon: "https://api.iconify.design/mdi:cash-multiple.svg?color=%230E3B2E",
    name: "Revenue",
    value: "$48,900",
    percentage: "+12.5%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:chart-line.svg?color=%230E3B2E",
    name: "Conversion Rate",
    value: "4.6%",
    percentage: "+0.9%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:account-plus.svg?color=%230E3B2E",
    name: "New Signups",
    value: "186",
    percentage: "+15.4%",
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:alert-circle-outline.svg?color=%230E3B2E",
    name: "Pending Tasks",
    value: "27",
    percentage: "-5.0%",
    trend: "down",
  },
];


function Statistics() {
  return (
    <div className='stats-main'>
        <h1 className='stats-header'>Statistics</h1>
        <div className='stats-cards-main'>
            {dashboardMetrics.map((metric) => (
                <div className='stats-card'>
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