
import Dress from "components/icons/Dress";
const navigations = [
  {
    icon: Dress,
    title: "الأزياء",
    href: "/fashion",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "أحذية الرجال",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "حذاء رياضي",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "صندل",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "رسمي",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "عادي",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "أحذية النساء",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "حذاء رياضي",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "صندل",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "رسمي",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "عادي",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
      ],
    },
  },
];
export default navigations;
