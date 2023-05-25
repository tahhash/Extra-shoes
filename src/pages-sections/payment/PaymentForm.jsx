import Link from "next/link";
import { Fragment, useState } from "react";
import { Box, Button, Divider, Grid, Radio, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card1 from "components/Card1";
import { Paragraph } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const width = useWindowSize();
  const handlePaymentMethodChange = ({ target: { name } }) => {
    setPaymentMethod(name);
  };
  return (
    <Fragment>
      <Card1
        sx={{
          mb: 4,
        }}
      >
        
        <FormControlLabel
          name="cod"
          onChange={handlePaymentMethodChange}
          label={<Paragraph fontWeight={600}>الدفع عند الاستلام</Paragraph>}
          control={
            <Radio
              checked={paymentMethod === "cod"}
              color="primary"
              size="small"
            />
          }
        />
      </Card1>

      <Grid container spacing={7}>
        <Grid item sm={6} xs={12}>
          <Button
            LinkComponent={Link}
            href="/checkout"
            variant="outlined"
            color="primary"
            type="button"
            fullWidth
          >
            العودة إلى تفاصيل الدفع
          </Button>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Button
            LinkComponent={Link}
            variant="contained"
            color="primary"
            href="/orders"
            type="submit"
            fullWidth
          >
            مراجعة
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PaymentForm;
