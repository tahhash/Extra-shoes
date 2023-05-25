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
      <div
        style={{
          backgroundImage: 'url("/homepage.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Added position property
        }}
      >
        <h2
          style={{
            position: "absolute",
            top: "50%",
            left: "33.33%",
            transform: "translate(-50%, -50%)",
            color: "white",
            zIndex: 1,
            fontSize: "36px",
            fontWeight: "bold",
            textAlign: "center", // Added textAlign property
          }}
        >
          اعثر على المقاس المثالي لقدميك
        </h2>
      </div>

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
