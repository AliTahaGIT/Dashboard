import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      profile: {
        viewProfile: "View Profile",
        settings: "Settings",
        name: 'Mr. Ali Taha'
      },
      sidebar: {
        home: "Home",
        statistics: "Statistics",
        datatable: "Data Table",
        charts: "Charts",
        activity: "Recent Activity",
      },
      home: {
        quickActionsTitle: 'Quick Actions',
        quickActions: {
          addUser: {
            name: "Add New User",
            desc: "Create and add a new user to the system",
            button: "Add User",
          },
          generateReport: {
            name: "Generate Report",
            desc: "Generate detailed system and performance reports",
            button: "Generate",
          },
          sendNotification: {
            name: "Send Notification",
            desc: "Send alerts or updates to users instantly",
            button: "Send",
          },
          exportData: {
            name: "Export Data",
            desc: "Export financial data for accounting and auditing",
            button: "Export",
          },
          auditLogs: {
            name: "Audit Logs",
            desc: "Review system activity and security logs",
            button: "Review",
          },
          viewAnalytics: {
            name: "View Analytics",
            desc: "View real-time analytics and system performance",
            button: "Open",
          },
          manageRoles: {
            name: "Manage Roles",
            desc: "Edit user roles and access permissions",
            button: "Manage",
          },
          systemSettings: {
            name: "System Settings",
            desc: "Configure system preferences and options",
            button: "Settings",
          },
          backupData: {
            name: "Backup Data",
            desc: "Create a secure backup of all system data",
            button: "Backup",
          },
        },
      }
    },
  },
  ar: {
    translation: {
      profile: {
        viewProfile: "عرض الملف الشخصي",
        settings: "الإعدادات",
        name: 'أ. علي طه'
      },
      sidebar: {
        home: "الرئيسية",
        statistics: "الإحصائيات",
        datatable: "جدول البيانات",
        charts: "الرسوم البيانية",
        activity: "النشاط الأخير",
      },
      home: {
        quickActionsTitle: 'إجراءات سريعة',
        quickActions: {
          addUser: {
            name: "إضافة مستخدم جديد",
            desc: "إنشاء وإضافة مستخدم جديد إلى النظام",
            button: "إضافة",
          },
          generateReport: {
            name: "إنشاء تقرير",
            desc: "إنشاء تقارير مفصلة عن النظام والأداء",
            button: "إنشاء",
          },
          sendNotification: {
            name: "إرسال إشعار",
            desc: "إرسال تنبيهات أو تحديثات للمستخدمين فوراً",
            button: "إرسال",
          },
          exportData: {
            name: "تصدير البيانات",
            desc: "تصدير البيانات المالية للمحاسبة والتدقيق",
            button: "تصدير",
          },
          auditLogs: {
            name: "سجلات التدقيق",
            desc: "مراجعة نشاط النظام وسجلات الأمان",
            button: "مراجعة",
          },
          viewAnalytics: {
            name: "عرض التحليلات",
            desc: "عرض التحليلات المباشرة وأداء النظام",
            button: "فتح",
          },
          manageRoles: {
            name: "إدارة الأدوار",
            desc: "تعديل أدوار المستخدمين وصلاحيات الوصول",
            button: "إدارة",
          },
          systemSettings: {
            name: "إعدادات النظام",
            desc: "تهيئة تفضيلات النظام والخيارات العامة",
            button: "الإعدادات",
          },
          backupData: {
            name: "نسخ احتياطي للبيانات",
            desc: "إنشاء نسخة احتياطية آمنة لجميع بيانات النظام",
            button: "نسخ احتياطي",
          },
        },
      }
    },
  },
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
  });

export default i18n;
