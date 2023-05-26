import duotone from "components/icons/duotone";
export const navigations = [
  {
    type: "label",
    label: "المشرف",
  },
  {
    name: "لوحة القيادة",
    icon: duotone.Dashboard,
    path: "/vendor/dashboard",
  },
  {
    name: "المنتجات",
    icon: duotone.Products,
    children: [
      {
        name: "قائمة المنتجات",
        path: "/admin/products",
      },
      {
        name: "إنشاء منتج",
        path: "/admin/products/create",
      },
    ],
  },
  {
    name: "الفئات",
    icon: duotone.Accounts,
    children: [
      {
        name: "قائمة الفئات",
        path: "/admin/categories",
      },
      {
        name: "إنشاء فئة",
        path: "/admin/categories/create",
      },
    ],
  },
  {
    name: "الطلبات",
    icon: duotone.Order,
    children: [
      {
        name: "قائمة الطلبات",
        path: "/admin/orders",
      },
    ],
  },
  {
    name: "العملاء",
    icon: duotone.Customers,
    path: "/admin/customers",
  },
  {
    name: "البائعين",
    icon: duotone.Seller,
    children: [
      {
        name: "قائمة البائعين",
        path: "/admin/sellers",
      },
      {
        name: "سجل الأرباح",
        path: "/admin/earning-history",
      },
      {
        name: "الدفعات",
        path: "/admin/payouts",
      },
    ],
  },
  {
    type: "label",
    label: "البائع",
  },
  {
    name: "الأرباح",
    icon: duotone.ProjectChart,
    children: [
      {
        name: "سجل الأرباح",
        path: "/vendor/earning-history",
      },
      {
        name: "الدفعات",
        path: "/vendor/payouts",
      },
    ],
  },
  {
    name: "إعدادات المتجر",
    icon: duotone.SiteSetting,
    path: "/vendor/shop-settings",
  },
  {
    name: "إعدادات الحساب",
    icon: duotone.AccountSetting,
    path: "/vendor/account-setting",
  },
  {
    name: "إعدادات الموقع",
    icon: duotone.SiteSetting,
    path: "/vendor/site-settings",
  },
  {
    name: "تسجيل الخروج",
    icon: duotone.Session,
    path: "/",
  },
];
