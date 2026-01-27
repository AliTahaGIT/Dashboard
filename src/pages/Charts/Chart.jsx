import React from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto"
import { Line, Bar, Pie, Doughnut, Radar } from "react-chartjs-2"
import './Chart.css'

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "#1F1F1F";

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

  //4 Goal Progress
  const goalPercentage = 53;

  //5 Doughnut Chart 
  const customerTypes = [
    { type: "New Customers", count: 1250 },
    { type: "Returning Customers", count: 980 },
    { type: "Guest Checkout", count: 420 },
  ];

  //6 Radar Chart
  const kpiPerformance = [
    { kpi: "Customer Support", score: 82 },
    { kpi: "Delivery Speed", score: 74 },
    { kpi: "Product Quality", score: 88 },
    { kpi: "Website UX", score: 79 },
    { kpi: "Stock Availability", score: 70 },
    { kpi: "Pricing Value", score: 84 },
  ];

  return (
    <div className='chart-main'>
      <h1 className='chart-header'>Data Charts</h1>

      <div className='chart-grid'>
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
            options={{
              plugins: {
                title: {
                  text: "Monthly Active Users",
                },
              },
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
                    "#9059d8"
                  ]
                }
              ]
            }}
            options={{
              plugins: {
                title: {
                  text: "Number of Orders by Month",
                },
              },
            }}
          />
        </div>

        <div className='dataCard'>
          <Pie
            data={{
              labels: purchasesByCategory.map((data) => data.category),
              datasets: [{
                label: "Most Purchase by Category",
                data: purchasesByCategory.map((data) => data.purchases),
                backgroundColor: [
                  "#fdba74",
                  "#fca5a5",
                  "#f9a8d4",
                  "#6ee7b7",
                  "#a5b4fc",
                ]
              }]
            }}
            options={{
              plugins: {
                title: {
                  text: "Top Purchases by Category",
                },
              },
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

        <div className="dataCard">
          <Doughnut
            data={{
              labels: customerTypes.map((data) => data.type),
              datasets: [
                {
                  label: "Customer Types",
                  data: customerTypes.map((data) => data.count),
                  backgroundColor: [
                    "#93c5fd",
                    "#6ee7b7",
                    "#fde047",
                  ],
                  borderWidth: 1,
                }
              ]
            }}
            options={{
              plugins: {
                title: {
                  text: "Customer Types",
                },
              },
            }}
          />
        </div>

        <div className="dataCard">
          <Radar
            data={{
              labels: kpiPerformance.map((data) => data.kpi),
              datasets: [
                {
                  label: "KPI Performance",
                  data: kpiPerformance.map((data) => data.score),
                  backgroundColor: "rgba(62, 142, 244, 0.2)",
                  borderColor: "#3E8EF4",
                  pointBackgroundColor: "#3E8EF4",
                  pointRadius: 3,
                }
              ]
            }}
            options={{
              plugins: {
                title: {
                  text: "KPI Performance",
                },
              },
            }}
          />
        </div>

      </div>
    </div>
  )
}

export default Chart
