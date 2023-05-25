import Link from "next/link";
import { Button, Card, Divider, Grid, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import SEO from "components/SEO";
import { Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
import ProductCard7 from "components/product-cards/ProductCard7";
import CheckoutNavLayout from "components/layouts/CheckoutNavLayout";
import { useAppContext } from "contexts/AppContext";
import countryList from "data/countryList";
import { currency } from "lib";
const Cart = () => {
  const { state } = useAppContext();
  const cartList = state.cart;
  const getTotalPrice = () =>
    cartList.reduce((accum, item) => accum + item.price * item.qty, 0);
  return (
    <CheckoutNavLayout>
      <SEO title="Cart" />

      <Grid container spacing={3}>
        {/* CART PRODUCT LIST */}
        <Grid item md={8} xs={12}>
          {cartList.map((item) => (
            <ProductCard7 key={item.id} {...item} />
          ))}
        </Grid>

        {/* CHECKOUT FORM */}
        <Grid item md={4} xs={12}>
          <Card
            sx={{
              padding: 3,
            }}
          >
            <FlexBetween mb={2}>
              <Span color="grey.600">الإجمالي:</Span>

              <Span fontSize={18} fontWeight={600} lineHeight="1">
                {currency(getTotalPrice())}
              </Span>
            </FlexBetween>

            <Divider
              sx={{
                mb: 2,
              }}
            />

            <FlexBox alignItems="center" columnGap={1} mb={2}>
              <Span fontWeight="600">تعليقات إضافية:</Span>

              <Span
                p="6px 10px"
                fontSize={12}
                lineHeight="1"
                borderRadius="3px"
                color="primary.main"
                bgcolor="primary.light"
              >
                Note
              </Span>
            </FlexBox>

            <TextField
              variant="outlined"
              rows={6}
              fullWidth
              multiline
              sx={{
                mb: 2,
              }}
            />

            <Divider
              sx={{
                mb: 2,
              }}
            />

            <TextField
              fullWidth
              size="small"
              label="قسيمة"
              variant="outlined"
              placeholder="قسيمة"
            />

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                mb: 4,
              }}
            >
              تطبيق القسيمة
            </Button>

            <Divider
              sx={{
                mb: 2,
              }}
            />

            <Span fontWeight={600} mb={2} display="block">
            تقديرات الشحن
            </Span>

            <Autocomplete
              fullWidth
              sx={{
                mb: 2,
              }}
              options={countryList}
              // getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="الدولة"
                  variant="outlined"
                  placeholder="اختر الدولة"
                />
              )}
            />

            <TextField
              select
              fullWidth
              size="small"
              label="الولاية"
              variant="outlined"
              placeholder="اختر الولاية"
              defaultValue="new-york"
            >
              {stateList.map((item) => (
                <MenuItem value={item.value} key={item.label}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              size="small"
              label="الرمز البريدي"
              placeholder="12000"
              variant="outlined"
              sx={{
                mt: 2,
              }}
            />

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{
                my: 2,
              }}
            >
              حساب التكلفة الشحن
            </Button>

            <Button
              fullWidth
              color="primary"
              href="/checkout"
              variant="contained"
              LinkComponent={Link}
            >
              الدفع الآن
            </Button>
          </Card>
        </Grid>
      </Grid>
    </CheckoutNavLayout>
  );
};
const stateList = [
  {
    value: "tebessa",
    label: "تبسة",
  },
];
export default Cart;
