import Link from "next/link";
import { Box, Container, Grid, IconButton, styled } from "@mui/material";
import AppStore from "components/AppStore";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
import Google from "components/icons/Google";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";

// styled component
const StyledLink = styled(Link)(({ theme }) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));
const Footer1 = () => {
  return (
    <footer>
      <Box bgcolor="#222935">
        <Container
          sx={{
            p: "1rem",
            color: "white",
          }}
        >
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Paragraph mb={2.5} color="grey.500">
                  مرحبًا بك في "إكسترا"، وجهتك النهائية لمقاسات الأحذية الكبيرة.
                  نحن متخصصون في تقديم أحذية أنيقة للرجال والنساء ذوي الأقدام
                  الكبيرة. تشمل تشكيلتنا الواسعة من الأحذية الكبيرة إضافة مضمونة
                  للراحة والأناقة دون التنازل عن الجودة. استكشف مجموعتنا اليوم
                  واعثر على الزوج المثالي الذي يتناسب مع أناقتك ومقاسك الفريد.
                  اخطو نحو الثقة مع إكسترا!
                </Paragraph>
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  حولنا
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  العناية بالعملاء
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  اتصل بنا
                </Box>

                <Box py={0.6} color="grey.500">
                  Rue de la basilique 357/16
                </Box>

                <Box py={0.6} color="grey.500">
                  email: tahh.hashh@gmail.com
                </Box>

                <Box py={0.6} mb={2} color="grey.500">
                  phone: 0541 14 98 28
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={ind}
                    >
                      <IconButton
                        sx={{
                          margin: 0.5,
                          fontSize: 12,
                          padding: "10px",
                          backgroundColor: "rgba(0,0,0,0.2)",
                        }}
                      >
                        <item.icon
                          fontSize="inherit"
                          sx={{
                            color: "white",
                          }}
                        />
                      </IconButton>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
const aboutLinks = ["الشروط والأحكام", "سياسة الخصوصية"];
const customerCareLinks = ["مركز المساعدة", "كيفية الشراء", "الإرجاع والاسترداد"];
const iconList = [
  {
    icon: Facebook,
    url: "",
  },
  {
    icon: Twitter,
    url: "",
  },
  {
    icon: Youtube,
    url: "",
  },
  {
    icon: Google,
    url: "",
  },
  {
    icon: Instagram,
    url: "",
  },
];
export default Footer1;
