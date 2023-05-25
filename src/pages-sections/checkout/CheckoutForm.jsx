import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import Card1 from "components/Card1";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import countryList from "data/countryList";
const CheckoutForm = () => {
  const router = useRouter();
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const handleFormSubmit = async (values) => {
    router.push("/payment");
  };
  const handleCheckboxChange = (values, setFieldValue) => (e, _) => {
    const checked = e.currentTarget.checked;
    setSameAsShipping(checked);
    setFieldValue("same_as_shipping", checked);
    setFieldValue("billing_name", checked ? values.shipping_name : "");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Card1
            sx={{
              mb: 4,
            }}
          >
            <Typography fontWeight="600" mb={2}>
            عنوان الشحن
            </Typography>

            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  label="الاسم الكامل"
                  onBlur={handleBlur}
                  name="shipping_name"
                  onChange={handleChange}
                  value={values.shipping_name}
                  error={!!touched.shipping_name && !!errors.shipping_name}
                  helperText={touched.shipping_name && errors.shipping_name}
                />
                <TextField
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  onBlur={handleBlur}
                  label="رقم الهاتف"
                  onChange={handleChange}
                  name="shipping_contact"
                  value={values.shipping_contact}
                  error={
                    !!touched.shipping_contact && !!errors.shipping_contact
                  }
                  helperText={
                    touched.shipping_contact && errors.shipping_contact
                  }
                />
                <TextField
                  fullWidth
                  type="number"
                  sx={{
                    mb: 2,
                  }}
                  label="الرمز البريدي"
                  name="shipping_zip"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shipping_zip}
                  error={!!touched.shipping_zip && !!errors.shipping_zip}
                  helperText={touched.shipping_zip && errors.shipping_zip}
                />
                <TextField
                  fullWidth
                  label="العنوان"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="shipping_address1"
                  value={values.shipping_address1}
                  error={
                    !!touched.shipping_address1 && !!errors.shipping_address1
                  }
                  helperText={
                    touched.shipping_address1 && errors.shipping_address1
                  }
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  sx={{
                    mb: 2,
                  }}
                  onBlur={handleBlur}
                  name="shipping_email"
                  label="عنوان البريد الإلكتروني"
                  onChange={handleChange}
                  value={values.shipping_email}
                  error={!!touched.shipping_email && !!errors.shipping_email}
                  helperText={touched.shipping_email && errors.shipping_email}
                />

              </Grid>
            </Grid>
          </Card1>

          

          <Grid container spacing={6}>
            <Grid item sm={6} xs={12}>
              <Button
                LinkComponent={Link}
                variant="outlined"
                color="primary"
                type="button"
                href="/cart"
                fullWidth
              >
                العودة إلى العربة
              </Button>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                المتابعة إلى عملية الدفع
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};
const initialValues = {
  shipping_zip: "",
  shipping_name: "",
  shipping_email: "",
  shipping_contact: "",
  shipping_company: "",
  shipping_address1: "",
  shipping_address2: "",
  shipping_country: countryList[229],
  billing_zip: "",
  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_address1: "",
  billing_address2: "",
  billing_country: countryList[229],
};

// uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  // shipping_name: yup.string().required("required"),
  // shipping_email: yup.string().email("invalid email").required("required"),
  // shipping_contact: yup.string().required("required"),
  // shipping_zip: yup.string().required("required"),
  // shipping_country: yup.object().required("required"),
  // shipping_address1: yup.string().required("required"),
  // billing_name: yup.string().required("required"),
  // billing_email: yup.string().required("required"),
  // billing_contact: yup.string().required("required"),
  // billing_zip: yup.string().required("required"),
  // billing_country: yup.object().required("required"),
  // billing_address1: yup.string().required("required"),
});
export default CheckoutForm;
