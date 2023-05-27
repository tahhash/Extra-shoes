/* eslint-disable react-hooks/exhaustive-deps */
import { DeleteOutline, ModeEditOutline } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Card1 from "components/Card1";
import { FlexBetween, FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H6, Paragraph } from "components/Typography";
import { months, years } from "data/months-years";
import { format } from "date-fns";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as yup from "yup";
import EditAddressForm from "./EditAddressForm";
import NewAddressForm from "./NewAddressForm";

// ====================================================================
// date types

// ====================================================================

const Heading = ({ number, title }) => {
  return (
    <FlexBox gap={1.5} alignItems="center" mb={3.5}>
      <Avatar
        sx={{
          width: 32,
          height: 32,
          color: "primary.text",
          backgroundColor: "primary.main",
        }}
      >
        {number}
      </Avatar>
      <Typography fontSize="20px">{title}</Typography>
    </FlexBox>
  );
};
const CheckoutForm2 = () => {
  const router = useRouter();
  const [hasVoucher, setHasVoucher] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [dateList, setDateList] = useState([]);
  const [addressData, setAddressData] = useState([]);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [selected, setSelected] = useState(false);
  const handleFormSubmit = async (values) => {
    router.push("/payment");
  };
  const handleFieldValueChange = (value, fieldName, setFieldValue) => () => {
    setFieldValue(fieldName, value);
  };
  const toggleHasVoucher = () => setHasVoucher((has) => !has);
  useEffect(() => {
    let list = [];
    let today = new Date();
    let dateCount = today.getDate();
    list.push({
      label: format(today, "dd MMMM"),
      value: today.toISOString(),
    });
    for (let i = 1; i < 10; i++) {
      today.setDate(dateCount + i);
      list.push({
        label: format(today, "dd MMMM"),
        value: today.toISOString(),
      });
    }
    setDateList(list);
  }, []);
  useEffect(() => {
    if (newAddress !== "") setAddressData([newAddress, ...addressData]);
    else setAddressData(addressList2);
  }, [newAddress]);
  const deleteAddress = (name) => {
    const newArr = addressData.filter((item) => item.name !== name);
    setAddressData(newArr);
  };
  const editHandler = (value) => {
    const data = addressData.find((item) => item.name === value);
    setSelected(data);
    openEditForm ? setOpenEditForm(false) : setOpenEditForm(true);
  };
  const initialValues = {
    card: "",
    date: "",
    time: "",
    address: "",
    voucher: "",
    cardHolderName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCVC: "",
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          

          <Card1
            sx={{
              mb: 3,
            }}
          >
            <FlexBetween>
              <Heading number={1} title="عنوان التوصيل" />

              <NewAddressForm setNewAddress={setNewAddress} />
            </FlexBetween>

            <Typography mb={1.5}>عنوان التوصيل</Typography>
            <Grid container spacing={3}>
              {addressData.map((item, ind) => (
                <Grid item md={4} sm={6} xs={12} key={ind}>
                  <Card
                    sx={{
                      padding: 2,
                      boxShadow: "none",
                      cursor: "pointer",
                      border: "1px solid",
                      position: "relative",
                      backgroundColor: "grey.100",
                      borderColor:
                        item.street1 === values.address
                          ? "primary.main"
                          : "transparent",
                    }}
                    onClick={handleFieldValueChange(
                      item.street1,
                      "address",
                      setFieldValue
                    )}
                  >
                    <FlexBox
                      justifyContent="flex-end"
                      sx={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                      }}
                    >
                      {selected && (
                        <EditAddressForm
                          selected={selected}
                          addressData={addressData}
                          openEditForm={openEditForm}
                          setOpenEditForm={setOpenEditForm}
                          setAddressData={setAddressData}
                        />
                      )}

                      <IconButton
                        size="small"
                        sx={{
                          mr: 1,
                        }}
                        onClick={() => editHandler(item.name)}
                      >
                        <ModeEditOutline
                          sx={{
                            fontSize: 20,
                          }}
                        />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => deleteAddress(item.name)}
                      >
                        <DeleteOutline
                          sx={{
                            fontSize: 20,
                          }}
                        />
                      </IconButton>
                    </FlexBox>

                    <H6 mb={0.5}>{item.name}</H6>
                    <Paragraph color="grey.700">{item.street1}</Paragraph>
                    {item.street2 && (
                      <Paragraph color="grey.700">{item.address2}</Paragraph>
                    )}
                    <Paragraph color="grey.700">{item.phone}</Paragraph>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card1>

          <Card1
            sx={{
              mb: 3,
            }}
          >
            <Heading number={2} title="تفاصيل الدفع" />
            <Button
              sx={{
                color: "primary.main",
                mt: 3,
                lineHeight: 1,
              }}
            >
              الدفع عند التسليم
            </Button>
            <Button
              sx={{
                color: "primary.main",
                mt: 3,
                lineHeight: 1,
              }}
              onClick={toggleHasVoucher}
            >
              لدي قسيمة
            </Button>

            {hasVoucher && (
              <FlexBox mt={3} gap={2} maxWidth="400px">
                <TextField
                  fullWidth
                  name="voucher"
                  value={values.voucher}
                  onChange={handleChange}
                  placeholder="أدخل رمز القسيمة هنا"
                />
                <Button variant="contained" color="primary" type="button">
                تطبيق
                </Button>
              </FlexBox>
            )}

            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="contained"
              sx={{
                mt: 3,
              }}
            >
              إتمام الطلب
            </Button>
          </Card1>
        </form>
      )}
    </Formik>
  );
};
const addressList2 = [
  {
    name: "Home",
    phone: "0541149828",
    street1: "Rue de la basilique 357/13",
  },
  {
    name: "Office",
    phone: "+037565392",
    street1: "Rue Mouhamed Sbiki 120/18",
  },
];
const paymentMethodList = [
  {
    cardType: "Amex",
    last4Digits: "4765",
    name: "Jaslynn Land",
  },
  {
    cardType: "Mastercard",
    last4Digits: "5432",
    name: "Jaslynn Land",
  },
  {
    cardType: "Visa",
    last4Digits: "4543",
    name: "Jaslynn Land",
  },
];
const timeList = [
  {
    label: "9AM - 11AM",
    value: "9AM - 11AM",
  },
  {
    label: "11AM - 1PM",
    value: "11AM - 1PM",
  },
  {
    label: "3PM - 5PM",
    value: "3PM - 5PM",
  },
  {
    label: "5PM - 7PM",
    value: "5PM - 7PM",
  },
];
const checkoutSchema = yup.object().shape({
  card: yup.string().required("required"),
  date: yup.string().required("required"),
  time: yup.string().required("required"),
  address: yup.string().required("required"),
  cardHolderName: yup.string().required("required"),
  cardNumber: yup.number().required("required"),
  cardMonth: yup.string().required("required"),
  cardYear: yup.number().required("required"),
  cardCVC: yup.number().required("required"),
  voucher: yup.string(),
});
export default CheckoutForm2;
