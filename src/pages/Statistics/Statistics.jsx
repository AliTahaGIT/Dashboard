import React from "react";
import "./Statistics.css";
import { useTranslation } from "react-i18next";

const dashboardMetrics = [
  {
    icon: "https://api.iconify.design/mdi:account-group.svg?color=%233E8EF4",
    key: "stats.totalUsers",
    type: "number",
    value: 12450,
    percentage: 8.2,
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:clipboard-list.svg?color=%233E8EF4",
    key: "stats.activeOrders",
    type: "number",
    value: 320,
    percentage: -3.1,
    trend: "down",
  },
  {
    icon: "https://api.iconify.design/mdi:cash-multiple.svg?color=%233E8EF4",
    key: "stats.revenue",
    type: "currency",
    value: 48900,
    currency: "USD",
    percentage: 12.5,
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:chart-line.svg?color=%233E8EF4",
    key: "stats.conversionRate",
    type: "percentValue",
    value: 4.6,
    percentage: 0.9,
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:account-plus.svg?color=%233E8EF4",
    key: "stats.newSignups",
    type: "number",
    value: 186,
    percentage: 15.4,
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:alert-circle-outline.svg?color=%233E8EF4",
    key: "stats.pendingTasks",
    type: "number",
    value: 27,
    percentage: -5.0,
    trend: "down",
  },
  {
    icon: "https://api.iconify.design/mdi:clock-outline.svg?color=%233E8EF4",
    key: "stats.avgSessionTime",
    type: "time",
    value: { m: 3, s: 42 },
    percentage: 6.8,
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:account-check-outline.svg?color=%233E8EF4",
    key: "stats.activeSubscribers",
    type: "number",
    value: 4320,
    percentage: -4.1,
    trend: "down",
  },
  {
    icon: "https://api.iconify.design/mdi:cart-outline.svg?color=%233E8EF4",
    key: "stats.completedOrders",
    type: "number",
    value: 1248,
    percentage: 9.7,
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:backup-restore.svg?color=%233E8EF4",
    key: "stats.refundRequests",
    type: "number",
    value: 19,
    percentage: -12.3,
    trend: "down",
  },
  {
    icon: "https://api.iconify.design/mdi:server-network.svg?color=%233E8EF4",
    key: "stats.systemUptime",
    type: "percentValue",
    value: 99.98,
    percentage: 0.02,
    trend: "up",
  },
  {
    icon: "https://api.iconify.design/mdi:email-outline.svg?color=%233E8EF4",
    key: "stats.supportTickets",
    type: "number",
    value: 64,
    percentage: 3.6,
    trend: "up",
  },
];

function Statistics() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar-EG" : "en-US";
  const isArabic = i18n.language === "ar";

  const formatNum = new Intl.NumberFormat(lang);
  const formatPerc = new Intl.NumberFormat(lang, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  });

  const formatValue = (metric) => {
    if (metric.type === "number") {
      return formatNum.format(metric.value);
    }

    if (metric.type === "currency") {
      return new Intl.NumberFormat(lang, {
        style: "currency",
        currency: metric.currency || "USD",
        maximumFractionDigits: 0,
      }).format(metric.value);
    }

    if (metric.type === "percentValue") {
      return `${formatPerc.format(metric.value)}%`;
    }

    if (metric.type === "time") {
      const m = formatNum.format(metric.value.m);
      const s = formatNum.format(metric.value.s);
      // Arabic units vs English units
      return isArabic ? `${m} د ${s} ث` : `${m}m ${s}s`;
    }

    return String(metric.value);
  };

  const formatChange = (p) => {
    const sign = p > 0 ? "+" : ""; // keep minus automatically
    return `${sign}${formatPerc.format(p)}%`;
  };

  return (
    <div className="stats-main">
      <h1 className="stats-header">{t("stats.title")}</h1>

      <div className="stats-cards-main">
        {dashboardMetrics.map((metric) => (
          <div className="stats-card" key={metric.key}>
            <img alt={t(metric.key)} src={metric.icon} className="stat-card-img" />

            <p className="stat-card-name">{t(metric.key)}</p>

            <p className="stat-card-value">{formatValue(metric)}</p>

            <p
              className={`stat-card-percentage ${
                metric.trend === "up" ? "trend-up" : "trend-down"
              }`}
            >
              {metric.trend === "up" ? "▲" : "▼"} {formatChange(metric.percentage)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
