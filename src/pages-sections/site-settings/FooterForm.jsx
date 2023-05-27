import { Fragment } from "react";
import { Delete } from "@mui/icons-material";
import { FieldArray, Formik } from "formik";
import { Button, Divider, Grid, IconButton, TextField } from "@mui/material";
import DropZone from "components/DropZone";
import { FlexBetween } from "components/flex-box";
import { H4 } from "components/Typography";
const FooterForm = () => {
  const initialValues = {
    footer_description: "",
    column_two_heading: "",
    column_two_links: [],
    column_three_heading: "",
    column_three_links: [],
    column_four_heading: "",
    column_four_description: "",
  };
  const handleFormSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DropZone
                onChange={(files) => console.log(files)}
                title="اسحب وأسقط شعار التذييل هنا"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                rows={4}
                multiline
                fullWidth
                color="info"
                size="medium"
                onBlur={handleBlur}
                onChange={handleChange}
                name="footer_description"
                label="وصف التذييل"
                value={values.footer_description}
              />
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <FieldArray
              name="column_two_links"
              render={(arrayHelper) => (
                <Fragment>
                  <Grid item xs={12}>
                    <FlexBetween>
                      <H4>محتوى العمود الثاني</H4>

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
                    </FlexBetween>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      color="info"
                      size="medium"
                      onBlur={handleBlur}
                      label="اسم العنوان"
                      onChange={handleChange}
                      name="column_two_heading"
                      value={values.column_two_heading}
                    />
                  </Grid>

                  {values.column_two_links?.map((item, index) => (
                    <Grid item container spacing={2} key={item.id}>
                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          label="الاسم"
                          color="info"
                          size="medium"
                          value={item.name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name={`column_two_links.${index}.name`}
                        />
                      </Grid>

                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          label="الرابط"
                          color="info"
                          size="medium"
                          value={item.link}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name={`column_two_links.${index}.link`}
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

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <FieldArray
              name="column_three_links"
              render={(arrayHelper) => (
                <Fragment>
                  <Grid item xs={12}>
                    <FlexBetween>
                      <H4>محتوى العمود الثالث</H4>

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
                    </FlexBetween>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      color="info"
                      size="medium"
                      onBlur={handleBlur}
                      label="اسم العنوان"
                      onChange={handleChange}
                      name="column_three_heading"
                      value={values.column_three_heading}
                    />
                  </Grid>

                  {values.column_three_links?.map((item, index) => (
                    <Grid item container spacing={2} key={item.id}>
                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          label="الاسم"
                          color="info"
                          size="medium"
                          value={item.name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name={`column_three_links.${index}.name`}
                        />
                      </Grid>

                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          label="الرابط"
                          color="info"
                          size="medium"
                          value={item.link}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name={`column_three_links.${index}.link`}
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

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <H4 mb={2}>محتوى العمود الرابع</H4>

              <TextField
                fullWidth
                color="info"
                size="medium"
                label="اسم العنوان"
                onBlur={handleBlur}
                onChange={handleChange}
                name="column_four_heading"
                value={values.column_four_heading}
                sx={{
                  mb: 3,
                }}
              />
              <TextField
                rows={4}
                multiline
                fullWidth
                color="info"
                size="medium"
                onBlur={handleBlur}
                onChange={handleChange}
                name="column_four_description"
                label="محتوى العمود"
                value={values.column_four_description}
              />
            </Grid>
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
export default FooterForm;
