import { Fragment } from "react";
import { useRouter } from "next/router";
import { Card, styled, Typography } from "@mui/material";
import { CreditCard, FavoriteBorder, Person, Place } from "@mui/icons-material";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import { FlexBox } from "components/flex-box";
import CustomerService from "components/icons/CustomerService";
import NavLink from "components/nav-link/NavLink";

// custom styled components
const MainContainer = styled(Card)(({ theme }) => ({
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    overflowY: "auto",
    height: "calc(100vh - 64px)",
  },
}));
const StyledNavLink = styled(({ children, isCurrentPath, ...rest }) => (
  <NavLink {...rest}>{children}</NavLink>
))(({ theme, isCurrentPath }) => ({
  display: "flex",
  alignItems: "center",
  borderLeft: "4px solid",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  marginBottom: "1.25rem",
  justifyContent: "space-between",
  borderColor: isCurrentPath ? theme.palette.primary.main : "transparent",
  "& .nav-icon": {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600],
  },
  "&:hover": {
    borderColor: theme.palette.primary.main,
    "& .nav-icon": {
      color: theme.palette.primary.main,
    },
  },
}));
const Navigations = () => {
  const { pathname } = useRouter();
  return (
    <MainContainer>
      {linkList.map((item) => (
        <Fragment key={item.title}>
          <Typography p="26px 30px 1rem" color="grey.600" fontSize="12px">
            {item.title}
          </Typography>

          {item.list.map((item) => (
            <StyledNavLink
              href={item.href}
              key={item.title}
              isCurrentPath={pathname.includes(item.href)}
            >
              <FlexBox alignItems="center" gap={1}>
                <item.icon
                  color="inherit"
                  fontSize="small"
                  className="nav-icon"
                />
                <span>{item.title}</span>
              </FlexBox>

              <span>{item.count}</span>
            </StyledNavLink>
          ))}
        </Fragment>
      ))}
    </MainContainer>
  );
};
const linkList = [
  {
    title: "لوحة التحكم",
    list: [
      {
        href: "/orders",
        title: "الطلبات",
        icon: ShoppingBagOutlined,
        count: 5,
      },
      {
        href: "/profile",
        title: "معلومات الملف الشخصي",
        icon: Person,
        count: "",
      },
      {
        href: "/address",
        title: "العناوين",
        icon: Place,
        count: 1,
      },
    ],
  },
];
export default Navigations;
