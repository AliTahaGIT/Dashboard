import "./Home.css"


const quickActions = [
  {
    name: "Add New User",
    icon: "https://api.iconify.design/mdi:account-plus.svg?color=%230E3B2E",
    desc: "Create and add a new user to the system",
    buttonName: "Add User",
  },
  {
    name: "Generate Report",
    icon: "https://api.iconify.design/mdi:file-chart.svg?color=%230E3B2E",
    desc: "Generate detailed system and performance reports",
    buttonName: "Generate",
  },
  {
    name: "Send Notification",
    icon: "https://api.iconify.design/mdi:bell-ring.svg?color=%230E3B2E",
    desc: "Send alerts or updates to users instantly",
    buttonName: "Send",
  },
  {
    name: "Export Data",
    icon: "https://api.iconify.design/mdi:file-export.svg?color=%230E3B2E",
    desc: "Export financial data for accounting and auditing",
    buttonName: "Export",
  },
];


function Home() {
  return (
    <div className='home-main'>
        <h1 className='home-header'> Quick Actions </h1>
        <div className='quick-action-main'>
            {quickActions.map((action) => (
                <div key={action.name} className='quick-action-item'>
                    <img alt={action.name} src={action.icon} className="quick-action-img"/>
                    <p className='quick-action-name'>{action.name}</p>
                    <p className='quick-action-desc'>{action.desc}</p>
                    <button type='button' className='quick-action-btn'>{action.buttonName}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home