import { Box } from "@mui/material";
import { H3 } from "components/Typography";

// ======================================================

// ======================================================

const ProductDescription = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: Nike <br />
        Model: Red <br />
      </Box>
    </Box>
  );
};
export default ProductDescription;
