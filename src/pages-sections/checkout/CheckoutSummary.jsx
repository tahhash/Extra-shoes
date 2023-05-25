import { Button, Divider, TextField, Typography } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBetween } from "components/flex-box";
import { currency } from "lib";
const CheckoutSummary = () => {
  return (
    <Card1>
      <FlexBetween mb={1}>
        <Typography color="grey.600">:الإجمالي الفرعي</Typography>
        <Typography fontSize="18px" fontWeight="600" lineHeight="1">
          {currency(2610)}
        </Typography>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Typography color="grey.600">:الشحن</Typography>
        <Typography fontSize="18px" fontWeight="600" lineHeight="1">
          {currency(0)}
        </Typography>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Typography color="grey.600">:الضريبة</Typography>
        <Typography fontSize="18px" fontWeight="600" lineHeight="1">
          {currency(40)}
        </Typography>
      </FlexBetween>

      <FlexBetween mb={2}>
        <Typography color="grey.600">:الخصم</Typography>
        <Typography fontSize="18px" fontWeight="600" lineHeight="1">
          {currency(0)}
        </Typography>
      </FlexBetween>

      <Divider
        sx={{
          mb: "1rem",
        }}
      />

      <Typography
        fontSize="25px"
        fontWeight="600"
        lineHeight="1"
        textAlign="right"
        mb={3}
      >
        {currency(2610)}
      </Typography>

      <TextField
        placeholder="القسيمة"
        variant="outlined"
        size="small"
        fullWidth
      />
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{
          mt: "1rem",
          mb: "30px",
        }}
      >
        تطبيق القسيمة
      </Button>
    </Card1>
  );
};
export default CheckoutSummary;
