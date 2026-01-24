import React from 'react'
import {Chart as ChartJS, defaults } from "chart.js/auto"
import { Line, Bar, Pie } from "react-chartjs-2"
import './Chart.css'

defaults.maintainAspectRatio = false;
defaults.responsive = true;


function Chart() {

    //1 Line Chart Data
    const activeUsersByMonth = [
      { month: "Jan", activeUsers: 1200 },
      { month: "Feb", activeUsers: 1350 },
      { month: "Mar", activeUsers: 1800 },
      { month: "Apr", activeUsers: 1650 },
      { month: "May", activeUsers: 1900 },
      { month: "Jun", activeUsers: 2200 },
      { month: "Jul", activeUsers: 2100 },
      { month: "Aug", activeUsers: 2050 },
      { month: "Sep", activeUsers: 1700 },
      { month: "Oct", activeUsers: 1950 },
      { month: "Nov", activeUsers: 1600 },
      { month: "Dec", activeUsers: 2300 },
    ];

    //2 Bar Chart
    const ordersByMonth = [
      { month: "Jan", orders: 420 },
      { month: "Feb", orders: 480 },   
      { month: "Mar", orders: 910 },
      { month: "Apr", orders: 560 },   
      { month: "May", orders: 710 },
      { month: "Jun", orders: 860 },   
      { month: "Jul", orders: 390 },   
      { month: "Aug", orders: 910 },
      { month: "Sep", orders: 850 },   
      { month: "Oct", orders: 1020 },  
      { month: "Nov", orders: 980 },   
      { month: "Dec", orders: 1180 }, 
    ];

    //3 Pie Chart
    const purchasesByCategory = [
      { category: "Electronics", purchases: 3800 },
      { category: "Fashion", purchases: 2430 },
      { category: "Baby Items", purchases: 1258 },
      { category: "Home", purchases: 1678 },
      { category: "Sports", purchases: 1090 },
    ];

    //4 Line Chart
    const goalPercentage = 53;





  return (
    <div className='chart-main'>
        <div className='dataCard'>
          <Line 
            data={{
              labels: activeUsersByMonth.map((data) => data.month),
              datasets: [
                {
                  label: "Monthly Active Users",
                  data: activeUsersByMonth.map((data) => data.activeUsers),
                  backgroundColor: "gray",
                  borderColor: "blue",
                  tension: 0.35,
                  pointRadius: 4,
                }
              ]
            }}
          />
        </div>

        <div className='dataCard'>
            <Bar
              data={{
                labels: ordersByMonth.map((data) => data.month),
                datasets: [
                  {
                    label: "Number of Orders by Month",
                    data: ordersByMonth.map((data) => data.orders),
                    backgroundColor: [
                      "#a5b4fc",
                      "#93c5fd",
                      "#67e8f9",
                      "#6ee7b7",
                      "#bef264",
                      "#fde047",
                      "#fdba74",
                      "#fca5a5",
                      "#f9a8d4",
                      "#d8b4fe",
                      "#c7d2fe",
                      "#e5e7eb"
                    ]
                  }
                ]
              }}
            />
        </div>

        <div className='dataCard'>
            <Pie
              data = {{
                labels: purchasesByCategory.map((data) => data.category),
                datasets: [{
                  label: "Most Purchase by Category",
                  data: purchasesByCategory.map((data) => data.purchases),
                  backgroundColor:[
                    "#fdba74",
                    "#fca5a5",
                    "#f9a8d4",
                    "#6ee7b7",
                    "#a5b4fc",
                  ]
                }]
              }}
            />
        </div>

        <div className="dataCard chart-goal">
          <p className="goal-title">Goal Progress</p>
          <p className="goal-value">
            Goal: <strong>2,500,000</strong>
          </p>

          <div className="goal-progress-bar">
            <div className="goal-progress-fill" style={{ width: `${goalPercentage}%` }}></div>
          </div>

          <p className="goal-percent">{goalPercentage}% achieved</p>
        </div>
    </div>
  )
}

export default Chart