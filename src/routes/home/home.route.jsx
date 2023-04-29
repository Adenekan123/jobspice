import {
  Container,
  Paper,
  Stack,
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { blue } from "@mui/material/colors";

import bannerImage from "../../assets/banner-img.png";

const Home = () => {
  return (
    <Paper elevation={0} sx={{ pt: 8, pb: 5 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs="12" lg="6">
            <Box>
              <Button
                disableElevation="true"
                variant="contained"
                startIcon={<MonetizationOnIcon color="success" />}
                sx={{
                  backgroundColor: blue[50],
                  color: blue[500],
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}
              >
                Discover The Easiest ways to Build Your CV
              </Button>
              <Typography
                variant="h3"
                color="darkblue"
                sx={{ fontWeight: "bold", my: 3 }}
              >
                Online CV Builder With Creative Templates.
              </Typography>
              <Typography variant="h6" color="gray">
                Our Perfect resume builder takes the hassle out of resume
                writing. Choose from several templates and follow easy prompts
                to create the perfect job-ready resume.
              </Typography>
              <Box sx={{mt:4}}>
                <Button variant="contained" size="large">Choose Template</Button>
                <Button variant="contained" sx={{backgroundColor:"primary.dark", ml:2}} size="large">Contact Us</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs="12" lg="6">
            <Box>
              <Box component={"img"} src={bannerImage} sx={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Home;
