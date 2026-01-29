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
      },

      stats: {
        title: "Statistics",
        totalUsers: "Total Users",
        activeOrders: "Active Orders",
        revenue: "Revenue",
        conversionRate: "Conversion Rate",
        newSignups: "New Signups",
        pendingTasks: "Pending Tasks",
        avgSessionTime: "Avg. Session Time",
        activeSubscribers: "Active Subscribers",
        completedOrders: "Completed Orders",
        refundRequests: "Refund Requests",
        systemUptime: "System Uptime",
        supportTickets: "Support Tickets",
      },

      activity: {
        title: "Recent Activity",

        newUsers: "New users registered",
        newUsersDesc: "5 new users signed up to the platform",

        orderCompleted: "Order completed",
        orderCompletedDesc: "Order ORD-1023 was successfully delivered",

        profileUpdated: "Profile updated",
        profileUpdatedDesc: "Admin updated a user profile details",

        maintenance: "System maintenance",
        maintenanceDesc: "Scheduled maintenance completed successfully",

        dbSynced: "Database synced",
        dbSyncedDesc: "All records synced with backup server",

        securityScan: "Security scan passed",
        securityScanDesc: "No vulnerabilities detected in latest scan",

        highVolume: "High order volume",
        highVolumeDesc: "Unusual spike in orders detected",

        shipmentDelayed: "Shipment delayed",
        shipmentDelayedDesc: "Order ORD-1041 delivery delayed",

        serverDown: "Server downtime",
        serverDownDesc: "One of the servers went offline",
      },
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
      },
      
      stats: {
        title: "الإحصائيات",
        totalUsers: "إجمالي المستخدمين",
        activeOrders: "الطلبات النشطة",
        revenue: "الإيرادات",
        conversionRate: "معدل التحويل",
        newSignups: "التسجيلات الجديدة",
        pendingTasks: "المهام المعلّقة",
        avgSessionTime: "متوسط مدة الجلسة",
        activeSubscribers: "المشتركون النشطون",
        completedOrders: "الطلبات المكتملة",
        refundRequests: "طلبات الاسترجاع",
        systemUptime: "جاهزية النظام",
        supportTickets: "تذاكر الدعم",
      },

      activity: {
        title: "النشاط الأخير",

        newUsers: "تسجيل مستخدمين جدد",
        newUsersDesc: "تم تسجيل ٥ مستخدمين جدد في المنصة",

        orderCompleted: "اكتمل الطلب",
        orderCompletedDesc: "تم تسليم الطلب ORD-1023 بنجاح",

        profileUpdated: "تم تحديث الملف الشخصي",
        profileUpdatedDesc: "قام المدير بتحديث بيانات مستخدم",

        maintenance: "صيانة النظام",
        maintenanceDesc: "تم الانتهاء من الصيانة المجدولة بنجاح",

        dbSynced: "تمت مزامنة قاعدة البيانات",
        dbSyncedDesc: "تمت مزامنة جميع السجلات مع الخادم الاحتياطي",

        securityScan: "اجتياز فحص الأمان",
        securityScanDesc: "لم يتم اكتشاف أي ثغرات في الفحص الأخير",

        highVolume: "ارتفاع عدد الطلبات",
        highVolumeDesc: "تم اكتشاف زيادة غير طبيعية في الطلبات",

        shipmentDelayed: "تأخير الشحنة",
        shipmentDelayedDesc: "تم تأخير تسليم الطلب ORD-1041",

        serverDown: "توقف الخادم",
        serverDownDesc: "أحد الخوادم خرج عن الخدمة",
      },

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
