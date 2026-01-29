import "./Home.css"
import { useTranslation } from "react-i18next";



const quickActions = [
  { key: "addUser", icon: "https://api.iconify.design/mdi:account-plus.svg?color=%233E8EF4"},
  { key: "generateReport", icon: "https://api.iconify.design/mdi:file-chart.svg?color=%233E8EF4"},
  { key: "sendNotification", icon: "https://api.iconify.design/mdi:bell-ring.svg?color=%233E8EF4"},
  { key: "exportData", icon: "https://api.iconify.design/mdi:file-export.svg?color=%233E8EF4"},
  { key: "auditLogs", icon: "https://api.iconify.design/mdi:clipboard-text-clock-outline.svg?color=%233E8EF4"},
  { key: "viewAnalytics", icon: "https://api.iconify.design/mdi:chart-line.svg?color=%233E8EF4"},
  { key: "manageRoles", icon: "https://api.iconify.design/mdi:account-cog.svg?color=%233E8EF4"},
  { key: "systemSettings", icon: "https://api.iconify.design/mdi:cog-outline.svg?color=%233E8EF4"},
  { key: "backupData", icon: "https://api.iconify.design/mdi:database-arrow-up.svg?color=%233E8EF4"},
];


function Home() {
  const { t } = useTranslation();

  return (
    <div className='home-main'>
      <h1 className='home-header'>
        {t("home.quickActionsTitle")}
      </h1>

      <div className='quick-action-main'>
        {quickActions.map((action) => (
          <div key={action.key} className='quick-action-item'>
            <img
              alt={t(`home.quickActions.${action.key}.name`)}
              src={action.icon}
              className="quick-action-img"
            />

            <p className='quick-action-name'>
              {t(`home.quickActions.${action.key}.name`)}
            </p>

            <p className='quick-action-desc'>
              {t(`home.quickActions.${action.key}.desc`)}
            </p>

            <button type='button' className='quick-action-btn'>
              {t(`home.quickActions.${action.key}.button`)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home