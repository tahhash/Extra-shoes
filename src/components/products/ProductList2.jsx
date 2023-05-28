import { Box, Pagination } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import ProductCard9 from "components/product-cards/ProductCard9";
import { Span } from "../Typography";
// ==========================================================

const ProductList2 = ({ products }) => {
  return (
    <Box>
      {products.map((item) => (
        <ProductCard9
          id={item.id}
          key={item.id}
          slug={item.slug}
          title={item.title}
          price={item.price}
          off={item.discount}
          rating={item.rating}
          imgUrl={item.thumbnail}
        />
      ))}

      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">عرض 1-9 من 1.3 ألف منتج</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </Box>
  );
};
export default ProductList2;
