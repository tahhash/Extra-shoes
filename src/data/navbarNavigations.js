import categoriesMegaMenu from "./categoriesMegaMenu";

// MEGAMENU DATA
const megaMenus = [
  [
    {
      title: "حساب المستخدم",
      child: [
        {
          title: "قائمة الطلبات",
          url: "/orders",
        },
        {
          title: "تفاصيل الطلب",
          url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        },
        {
          title: "عرض الملف الشخصي",
          url: "/profile",
        },
        {
          title: "تعديل الملف الشخصي",
          url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
        },
        {
          title: "قائمة العناوين",
          url: "/address",
        },
        {
          title: "إضافة عنوان",
          url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
        },
        {
          title: "جميع التذاكر",
          url: "/support-tickets",
        },
        {
          title: "تفاصيل التذكرة",
          url: "/support-tickets/when-will-my-product-arrive",
        },
        {
          title: "المفضلة",
          url: "/wish-list",
        },
      ],
    },
    {
      title: "حساب البائع",
      child: [
        {
          title: "لوحة التحكم",
          url: "/vendor/dashboard",
        },
        {
          title: "الملف الشخصي",
          url: "/vendor/account-setting",
        },
      ],
    },
    {
      title: "المنتجات",
      child: [
        {
          title: "جميع المنتجات",
          url: "/admin/products",
        },
        {
          title: "إضافة/تعديل المنتج",
          url: "/admin/products/create",
        },
      ],
    },
    {
      title: "الطلبات",
      child: [
        {
          title: "جميع الطلبات",
          url: "/admin/orders",
        },
        {
          title: "تفاصيل الطلب",
          url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        },
      ],
    },
    {
      title: "صفحة البيع",
      child: [
        {
          title: "إصدار البيع 1",
          url: "/sale-page-1",
        },
        {
          title: "إصدار البيع 2",
          url: "/sale-page-2",
        },
      ],
    },
    {
      title: "المتجر",
      child: [
        {
          title: "البحث عن منتج",
          url: "/product/search/mobile phone",
        },
        {
          title: "منتج واحد",
          url: "/product/lord-2019",
        },
        {
          title: "السلة",
          url: "/cart",
        },
        {
          title: "متابعة الطلب",
          url: "/checkout",
        },
        {
          title: "الدفع البديل",
          url: "/checkout-alternative",
        },
        {
          title: "تأكيد الطلب",
          url: "/order-confirmation",
        },
      ],
    },
  ],
];

// MAIN NAVIGATION DATA
const navbarNavigations = [
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "الصفحات",
    child: [
      {
        title: "صفحة البيع",
        child: [
          {
            title: "الإصدار 1",
            url: "/sale-page-1",
          },
          {
            title: "الإصدار 2",
            url: "/sale-page-2",
          },
        ],
      },
      {
        title: "البائع",
        child: [
          {
            title: "جميع البائعين",
            url: "/shops",
          },
          {
            title: "متجر البائع",
            url: "/shops/scarlett-beauty",
          },
        ],
      },
      {
        title: "المتجر",
        child: [
          {
            title: "البحث عن منتج",
            url: "/product/search/mobile phone",
          },
          {
            title: "منتج واحد",
            url: "/product/lord-2019",
          },
          {
            title: "السلة",
            url: "/cart",
          },
          {
            title: "الدفع",
            url: "/checkout",
          },
          {
            title: "الدفع البديل",
            url: "/checkout-alternative",
          },
          {
            title: "تأكيد الطلب",
            url: "/order-confirmation",
          },
        ],
      },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "حساب المستخدم",
    child: [
      {
        title: "الطلبات",
        child: [
          {
            title: "قائمة الطلبات",
            url: "/orders",
          },
          {
            title: "تفاصيل الطلب",
            url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
          },
        ],
      },
      {
        title: "الملف الشخصي",
        child: [
          {
            title: "عرض الملف الشخصي",
            url: "/profile",
          },
          {
            title: "تعديل الملف الشخصي",
            url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
          },
        ],
      },
      {
        title: "العنوان",
        child: [
          {
            title: "قائمة العناوين",
            url: "/address",
          },
          {
            title: "إضافة عنوان",
            url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
          },
        ],
      },
      {
        title: "تذاكر الدعم",
        child: [
          {
            title: "جميع التذاكر",
            url: "/support-tickets",
          },
          {
            title: "تفاصيل التذكرة",
            url: "/support-tickets/when-will-my-product-arrive",
          },
        ],
      },
      {
        title: "المفضلة",
        url: "/wish-list",
      },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Vendor Account",
    child: [
      {
        title: "Dashboard",
        url: "/vendor/dashboard",
      },
      {
        title: "Products",
        child: [
          {
            title: "All products",
            url: "/admin/products",
          },
          {
            title: "Add/Edit product",
            url: "/admin/products/lord-2019",
          },
        ],
      },
      {
        title: "Orders",
        child: [
          {
            title: "All orders",
            url: "/admin/orders",
          },
          {
            title: "Order details",
            url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
          },
        ],
      },
      {
        title: "Profile",
        url: "/vendor/account-setting",
      },
    ],
  },
];
export default navbarNavigations;
