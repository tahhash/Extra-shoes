import { useState } from "react";
import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box";
import { H3, Paragraph } from "components/Typography";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
const INITIAL_VALUES = {
  order: 10,
  category: "fashion",
  shopName: "Big Shoes",
  shopPhone: "0541 14 98 28",
  shopAddress: "Rue de la basilique 357/13",
  description: `مرحبًا بك في "إكسترا"، وجهتك النهائية لمقاسات الأحذية الكبيرة. نحن متخصصون في تقديم أحذية أنيقة للرجال والنساء ذوي الأقدام الكبيرة. تشمل تشكيلتنا الواسعة من الأحذية الكبيرة إضافة مضمونة للراحة والأناقة دون التنازل عن الجودة. استكشف مجموعتنا اليوم واعثر على الزوج المثالي الذي يتناسب مع أناقتك ومقاسك الفريد. اخطو نحو الثقة مع إكسترا`,
};
const validationSchema = Yup.object().shape({
  shopName: Yup.string().required("Shop Name is required!"),
  shopPhone: Yup.string().required("Shop Phone is required!"),
  category: Yup.string().required("Category is required!"),
  description: Yup.string().required("Description is required!"),
  shopAddress: Yup.string().required("Shop Address is required!"),
  order: Yup.number().required("Orders is required!"),
});

// =============================================================================
ShopSettings.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

export default function ShopSettings() {
  const [links, setLinks] = useState([
    {
      id: 1,
      name: "روابط",
      value: "https://www.productbanner.com",
    },
  ]);
  const handleAddLink = () => {
    const newLink = {
      id: Date.now(),
      name: "روابط",
      value: "",
    };
    setLinks((state) => [...state, newLink]);
  };
  const handleDeleteLink = (id) => () => {
    setLinks((state) => state.filter((item) => item.id !== id));
  };
  const handleFormSubmit = (values) => {};
  return (
    <Box py={4} maxWidth={740} margin="auto">
      <H3 mb={2}>إعدادات المتجر</H3>

      <Card
        sx={{
          p: 3,
        }}
      >
        <Paragraph fontWeight={700} mb={4}>
        الإعدادات الأساسية
        </Paragraph>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={INITIAL_VALUES}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} mb={3}>
                <TextField
                  color="info"
                  size="medium"
                  name="shopName"
                  label="اسم المتجر *"
                  onBlur={handleBlur}
                  value={values.shopName}
                  onChange={handleChange}
                  error={Boolean(errors.shopName && touched.shopName)}
                  helperText={touched.shopName && errors.shopName}
                />

                <TextField
                  color="info"
                  size="medium"
                  name="shopPhone"
                  label="هاتف المتجر"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shopPhone}
                  error={Boolean(errors.shopPhone && touched.shopPhone)}
                  helperText={touched.shopPhone && errors.shopPhone}
                />

                <TextField
                  select
                  fullWidth
                  color="info"
                  size="medium"
                  name="category"
                  onBlur={handleBlur}
                  placeholder="Category"
                  label="اختر الفئة"
                  onChange={handleChange}
                  value={values.category}
                  error={Boolean(errors.category && touched.category)}
                  helperText={touched.category && errors.category}
                >
                  <MenuItem value="electronics">أحذية رجال</MenuItem>
                  <MenuItem value="fashion">أحذية نساء</MenuItem>
                </TextField>

                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  label="الوصف (اختياري)"
                  error={Boolean(errors.description && touched.description)}
                  helperText={touched.description && errors.description}
                />

                <TextField
                  color="info"
                  size="medium"
                  name="shopAddress"
                  label="عنوان المتجر"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shopAddress}
                  error={Boolean(errors.shopAddress && touched.shopAddress)}
                  helperText={touched.shopAddress && errors.shopAddress}
                />

                <TextField
                  name="order"
                  color="info"
                  size="medium"
                  type="number"
                  onBlur={handleBlur}
                  value={values.order}
                  label="الحد الأدنى للطلب *"
                  onChange={handleChange}
                  error={Boolean(errors.order && touched.order)}
                  helperText={touched.order && errors.order}
                />
              </Stack>

              <Button type="submit" color="info" variant="contained">
              حفظ التغييرات
              </Button>
            </form>
          )}
        </Formik>

        <Divider
          sx={{
            my: 4,
          }}
        />

        <Paragraph fontWeight={700} mb={2}>
        إعدادات صفحة المتجر
        </Paragraph>

        <Stack spacing={3} mb={3}>
          <DropZone
            onChange={(files) => console.log(files)}
            title="اللافتة الرئيسية (1920 × 360)*"
            imageSize="تم تقييد الارتفاع للحفاظ على التوافق. قد يتم قص جانبي البانر على بعض الأجهزة بسبب قيود الارتفاع"
          />

          <TextField
            select
            fullWidth
            color="info"
            size="medium"
            name="features"
            placeholder="مميزات المنتج"
            label="مميزات المنتج"
            defaultValue="electronics"
          >
            <MenuItem value="electronics">أحذية رجال</MenuItem>
            <MenuItem value="fashion">أحذية نساء</MenuItem>
          </TextField>

          <DropZone
            onChange={(files) => console.log(files)}
            title="بانر صفحة جميع المنتجات * (الحجم الموصى به 1025 × 120)"
            imageSize="تم تقييد الارتفاع للحفاظ على التوافق. قد يتم قص جانبي البانر على بعض الأجهزة بسبب قيود الارتفاع"
          />
        </Stack>

        <Box mb={4}>
          {links.map((item) => (
            <FlexBox gap={2} alignItems="center" mb={2} key={item.id}>
              <TextField
                fullWidth
                color="info"
                size="medium"
                label="روابط"
                defaultValue={item.value}
              />

              <Box flexShrink={0}>
                <IconButton onClick={handleDeleteLink(item.id)}>
                  <Delete
                    sx={{
                      color: "grey.600",
                    }}
                  />
                </IconButton>
              </Box>
            </FlexBox>
          ))}

          <Button color="info" variant="outlined" onClick={handleAddLink}>
          إضافة رابط
          </Button>
        </Box>

        <Button color="info" variant="contained">
        حفظ التغييرات
        </Button>
      </Card>
    </Box>
  );
}
