import { Fragment } from "react";
import { Delete } from "@mui/icons-material";
import { FieldArray, Formik } from "formik";
import { Button, Divider, Grid, IconButton, TextField } from "@mui/material";
import { H4 } from "components/Typography";
import { FlexBox } from "components/flex-box";
const TopbarForm = () => {
  const initialValues = {
    phone: "0541 14 98 28",
    email: "tahh.hashh@gmail.com",
  };
  const handleFormSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <H4>المحتوى الأيسر في الشريط العلوي</H4>
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="phone"
                color="info"
                size="medium"
                label="الهاتف"
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                placeholder="0000000000"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="info"
                name="email"
                size="medium"
                label="البريد الإلكتروني"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <FieldArray
              name="links"
              render={(arrayHelper) => (
                <Fragment>
                  <Grid item xs={12}>
                    <FlexBox alignItems="center" justifyContent="space-between">
                      <H4>الجزء العلوي الأيمن</H4>

                      <Button
                        color="info"
                        variant="contained"
                        onClick={() => {
                          arrayHelper.push({
                            id: Date.now(),
                            name: "",
                            link: "",
                          });
                        }}
                      >
                        إضافة عنصر
                      </Button>
                    </FlexBox>
                  </Grid>

                  {values.links?.map((item, index) => (
                    <Grid item container spacing={2} key={item.id}>
                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          color="info"
                          size="medium"
                          label="الاسم"
                          value={item.name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name={`links.${index}.name`}
                        />
                      </Grid>

                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          color="info"
                          size="medium"
                          label="الرابط"
                          value={item.link}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name={`links.${index}.link`}
                        />
                      </Grid>

                      <Grid item xs={2}>
                        <IconButton onClick={() => arrayHelper.remove(index)}>
                          <Delete />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                </Fragment>
              )}
            />
          </Grid>

          <Button
            type="submit"
            color="info"
            variant="contained"
            sx={{
              mt: 4,
            }}
          >
            حفظ التغييرات
          </Button>
        </form>
      )}
    </Formik>
  );
};
export default TopbarForm;
