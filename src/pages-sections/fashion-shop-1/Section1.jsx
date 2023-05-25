import { Box, Container, Grid } from "@mui/material";
import FeedbackThumbsUpIcon from "components/icons/FeedbackThumbsUp";
import CreditCardVerifiedIcon from "components/icons/CreditCardVerified";
import ShowcaseCard4 from "./showcase-cards/ShowcaseCard4";
import Image from "next/image";
const Section1 = () => {
  return (
    <Container
      sx={{
        pt: "1rem",
        mb: "4rem",
      }}
    >
      {/* GRIDS */}
      <Grid>
        <div style={{ position: "relative", textAlign: "center" }}>
          <Image
            src="/homepage.jpg"
            alt="Your Image"
            layout="responsive"
            width={1600}
            height={640}
          />
          <h2
            style={{
              position: "absolute",
              top: "50%",
              left: "33.33%", // Updated left property
              transform: "translate(-50%, -50%)",
              color: "white",
              zIndex: 1,
              width: "100%",
              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            اعثر على المقاس المثالي لقدميك
          </h2>
        </div>
        <ShowcaseCard4
            title="مجموعة ضخمة من الأحذية بمقاسات كبيرة"
            body="الأحجام من 14 إلى 21

            الأحذية التي ترغب فيها
            الأحجام التي تحتاجها
            تشكيلة كبيرة من أحذية الرجال بمقاسات كبيرة!
            
            معظم مخزوننا متوفر في المخزن
            
            شحن في نفس اليوم لمعظم الطلبات!"
          />
      </Grid>
      

      {/* END GRIDS */}

      <Box mb="1.5rem" />

      <Grid container spacing={3}>
        <Grid item md={3} sm={6} xs={12}>
          {/* SERVICE CARD */}
          <ShowcaseCard4
            title="دفع آمن"
            Icon={CreditCardVerifiedIcon}
            body="دفع مؤمّن وخصوصية %100"
          />
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          {/* SERVICE CARD */}
          <ShowcaseCard4
            title="تقييم رائع"
            Icon={FeedbackThumbsUpIcon}
            body="أكثر من 97% من العملاء راضون وسعداء"
          />
        </Grid>

        <Grid item md={6} xs={12}>
          {/* OFFER CARD */}
          <ShowcaseCard4
            title="عمليات سهلة"
            Icon={FeedbackThumbsUpIcon}
            body="!بسرعة إلى باب منزلك"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Section1;
