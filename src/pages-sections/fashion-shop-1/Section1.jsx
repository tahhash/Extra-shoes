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
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              zIndex: 1,
              width: "100%",
              fontSize: "36px",
              fontWeight: "bold",
              fontFamily: "Janna LT Bold, Arial, sans-serif",
            }}
          >
            اعثر على المقاس المثالي لقدميك!
          </h2>
        </div>
      </Grid>

      {/* END GRIDS */}

      <Box mb="1.5rem" />

      <Grid container spacing={3}>
        <Grid item md={3} sm={6} xs={12}>
          {/* SERVICE CARD */}
          <ShowcaseCard4
            title="Secure Payment"
            Icon={CreditCardVerifiedIcon}
            body="100% secured payment & privacy"
          />
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          {/* SERVICE CARD */}
          <ShowcaseCard4
            title="Great Feedback"
            Icon={FeedbackThumbsUpIcon}
            body="More than 97% positive & happy customers"
          />
        </Grid>

        <Grid item md={6} xs={12}>
          {/* OFFER CARD */}
          <ShowcaseCard4
            title="Easy Transactions"
            Icon={FeedbackThumbsUpIcon}
            body="Quickly to your house!"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Section1;
