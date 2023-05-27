import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
const checkoutSchema = yup.object({
  street2: yup.string(),
  name: yup.string().required("required"),
  street1: yup.string().required("required"),
  phone: yup.number().required("required"),
  city: yup.string().required("required"),
  state: yup.string().required("required"),
  country: yup.string().required("required"),
  zip: yup.number().required("required"),
});
const initialValues = {
  name: "",
  street1: "",
  street2: "",
  phone: "",
  city: "",
  state: "",
  country: "",
  zip: "",
};

// ==================================================================

// ==================================================================

const NewAddressForm = ({ setNewAddress }) => {
  const [addCardForm, setAddCardForm] = useState(false);
  const { handleChange, handleSubmit, errors, touched, values } = useFormik({
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    onSubmit: (values, { resetForm }) => {
      setNewAddress(values);
      if (values) {
        setAddCardForm(false);
        resetForm(initialValues);
      }
    },
  });
  return (
    <Fragment>
      <Button
        color="primary"
        variant="outlined"
        sx={{
          p: "2px 20px",
        }}
        onClick={() =>
          addCardForm ? setAddCardForm(false) : setAddCardForm(true)
        }
      >
        إضافة عنوان جديد
      </Button>

      <Dialog open={addCardForm} onClose={() => setAddCardForm(false)}>
        <DialogContent>
          <Typography variant="h6" mb={3}>
          إضافة معلومات عنوان جديد
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="name"
                  value={values.name}
                  label="أدخل اسمك"
                  onChange={handleChange}
                  helperText={touched.name && errors.name}
                  error={touched.name && Boolean(errors.name)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="street1"
                  label="الشارع"
                  value={values.street1}
                  onChange={handleChange}
                  helperText={touched.street1 && errors.street1}
                  error={touched.street1 && Boolean(errors.street1)}
                />
              </Grid>


              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="الهاتف"
                  value={values.phone}
                  onChange={handleChange}
                  label="أدخل رقم هاتفك"
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="city"
                  label="المدينة"
                  value={values.city}
                  onChange={handleChange}
                  helperText={touched.city && errors.city}
                  error={touched.city && Boolean(errors.city)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="state"
                  label="الولاية"
                  value={values.state}
                  onChange={handleChange}
                  helperText={touched.state && errors.state}
                  error={touched.state && Boolean(errors.state)}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="zip"
                  label="الرمز البريدي"
                  type="text"
                  value={values.zip}
                  onChange={handleChange}
                  helperText={touched.zip && errors.zip}
                  error={touched.zip && Boolean(errors.zip)}
                />
              </Grid>

              
              <Grid item sm={6} xs={12}>
                <Button color="primary" variant="contained" type="submit">
                حفظ
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
export default NewAddressForm;
