import React from "react";
import { useTranslation } from "react-i18next";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import EditIcon from "@mui/icons-material/Edit";

import StorageIcon from "@mui/icons-material/Storage";
import SyncIcon from "@mui/icons-material/Sync";
import SecurityIcon from "@mui/icons-material/Security";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CloudOffIcon from "@mui/icons-material/CloudOff";

import "./Activity.css";

const recentActivities = [
  {
    id: 1,
    type: "user",
    Icon: PersonAddIcon,
    titleKey: "activity.newUsers",
    descKey: "activity.newUsersDesc",
    time: { value: 5, unit: "min" },
  },
  {
    id: 2,
    type: "user",
    Icon: ShoppingCartCheckoutIcon,
    titleKey: "activity.orderCompleted",
    descKey: "activity.orderCompletedDesc",
    time: { value: 45, unit: "min" },
  },
  {
    id: 3,
    type: "user",
    Icon: EditIcon,
    titleKey: "activity.profileUpdated",
    descKey: "activity.profileUpdatedDesc",
    time: { value: 2, unit: "hour" },
  },
  {
    id: 4,
    type: "system",
    Icon: StorageIcon,
    titleKey: "activity.maintenance",
    descKey: "activity.maintenanceDesc",
    time: { value: 1, unit: "day", label: "yesterday" },
  },
  {
    id: 5,
    type: "system",
    Icon: SyncIcon,
    titleKey: "activity.dbSynced",
    descKey: "activity.dbSyncedDesc",
    time: { value: 1, unit: "day", label: "yesterday" },
  },
  {
    id: 6,
    type: "system",
    Icon: SecurityIcon,
    titleKey: "activity.securityScan",
    descKey: "activity.securityScanDesc",
    time: { value: 2, unit: "day" },
  },
  {
    id: 7,
    type: "alert",
    Icon: ErrorOutlineIcon,
    titleKey: "activity.highVolume",
    descKey: "activity.highVolumeDesc",
    time: { value: 10, unit: "min" },
  },
  {
    id: 8,
    type: "alert",
    Icon: LocalShippingIcon,
    titleKey: "activity.shipmentDelayed",
    descKey: "activity.shipmentDelayedDesc",
    time: { value: 1, unit: "hour" },
  },
  {
    id: 9,
    type: "alert",
    Icon: CloudOffIcon,
    titleKey: "activity.serverDown",
    descKey: "activity.serverDownDesc",
    time: { value: 3, unit: "hour" },
  },
];

function Activity() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const nf = new Intl.NumberFormat(isArabic ? "ar-EG" : "en-US");

  const formatTime = (time) => {
    if (time.label === "yesterday") {
      return isArabic ? "أمس" : "Yesterday";
    }

    const num = nf.format(time.value);

    if (time.unit === "min") return isArabic ? `${num} دقيقة` : `${num} minutes ago`;
    if (time.unit === "hour") return isArabic ? `${num} ساعة` : `${num} hours ago`;
    if (time.unit === "day") return isArabic ? `${num} أيام` : `${num} days ago`;

    return "";
  };

  return (
    <div className="activity-main">
      <h1 className="activity-header">{t("activity.title")}</h1>

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
              <p className="activity-title">{t(activity.titleKey)}</p>

              <p className="activity-desc">
                {t(activity.descKey)} –{" "}
                <span className="activity-time">{formatTime(activity.time)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
