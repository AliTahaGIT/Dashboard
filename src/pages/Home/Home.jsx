import "./Home.css"


const quickActions = [
  {
    name: "Add New User",
    icon: "https://api.iconify.design/mdi:account-plus.svg?color=%233E8EF4",
    desc: "Create and add a new user to the system",
    buttonName: "Add User",
  },
  {
    name: "Generate Report",
    icon: "https://api.iconify.design/mdi:file-chart.svg?color=%233E8EF4",
    desc: "Generate detailed system and performance reports",
    buttonName: "Generate",
  },
  {
    name: "Send Notification",
    icon: "https://api.iconify.design/mdi:bell-ring.svg?color=%233E8EF4",
    desc: "Send alerts or updates to users instantly",
    buttonName: "Send",
  },
  {
    name: "Export Data",
    icon: "https://api.iconify.design/mdi:file-export.svg?color=%233E8EF4",
    desc: "Export financial data for accounting and auditing",
    buttonName: "Export",
  },
  {
    name: "Audit Logs",
    icon: "https://api.iconify.design/mdi:clipboard-text-clock-outline.svg?color=%233E8EF4",
    desc: "Review system activity and security logs",
    buttonName: "Review",
  },
  {
    name: "View Analytics",
    icon: "https://api.iconify.design/mdi:chart-line.svg?color=%233E8EF4",
    desc: "View real-time analytics and system performance",
    buttonName: "Open",
  },
  {
    name: "Manage Roles",
    icon: "https://api.iconify.design/mdi:account-cog.svg?color=%233E8EF4",
    desc: "Edit user roles and access permissions",
    buttonName: "Manage",
  },
  {
    name: "System Settings",
    icon: "https://api.iconify.design/mdi:cog-outline.svg?color=%233E8EF4",
    desc: "Configure system preferences and options",
    buttonName: "Settings",
  },
  {
    name: "Backup Data",
    icon: "https://api.iconify.design/mdi:database-arrow-up.svg?color=%233E8EF4",
    desc: "Create a secure backup of all system data",
    buttonName: "Backup",
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