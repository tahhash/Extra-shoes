import SEO from "components/SEO";
import { Box } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Section1 from "pages-sections/fashion-shop-1/Section1";
import Section2 from "pages-sections/fashion-shop-1/Section2";
import Section3 from "pages-sections/fashion-shop-1/Section3";
import BackgroundImageComponent from "pages-sections/fashion-shop-1/BackgroundImageComponent";
import Section6 from "pages-sections/fashion-shop-1/Section6";
import api from "utils/__api__/fashion-shop";
const IndexPage = (props) => {
  return (
    <ShopLayout1 showTopbar={false}>
      <SEO title=""/>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          overFlow: "hidden",
        }}
      >

        <BackgroundImageComponent/>


        {/* HERO SECTION AND SERCIVE CARDS */}
        <Section1 />

        {/* FLASH DEALS */}
        <Section2 flashDeals={props.flashDealsData} />

        {/* NEW ARRIVALS */}
        <Section3 newArrivals={props.newArrivalsData} />

        {/* TRENDING ITEMS */}
        <Section6 products={props.trendingItems} />
      </Box>
    </ShopLayout1>
  );
};
export const getStaticProps = async () => {
  const hotDealList = await api.getHotDealList();
  const serviceList = await api.getServiceList();
  const flashDealsData = await api.getFlashDeals();
  const trendingItems = await api.getTrendingItems();
  const newArrivalsData = await api.getNewArrivals();
  const dealOfTheWeek = await api.getDealOfTheWeekList();
  return {
    props: {
      hotDealList,
      serviceList,
      dealOfTheWeek,
      trendingItems,
      flashDealsData,
      newArrivalsData,
    },
  };
};
export default IndexPage;
