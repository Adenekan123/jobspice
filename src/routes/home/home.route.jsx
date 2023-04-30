import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  IconButton,
  Avatar,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { blue, green, orange, purple, red, yellow } from "@mui/material/colors";

import bannerImage from "../../assets/banner-img.png";
import benefitForeground from "../../assets/benefits-bg.svg";
import templateForeground from "../../assets/ring-bg.png";
import CheckImg from "../../assets/check.png";
import CVImage from "../../assets/cv.png";
import DIYImage from "../../assets/custom.png";
import priceImg from "../../assets/price.png";
import cv1 from "../../assets/demo-1.png";
import cv2 from "../../assets/demo-2.png";
import cv3 from "../../assets/demo-3.png";
import testimonyImg1 from "../../assets/1.jpg";
import testimonyImg2 from "../../assets/2.jpg";
import testimonyImg3 from "../../assets/3.jpg";

import {
  ArrowRightAlt,
  CreditCardOff,
  FilePresent,
  FormatPaint,
  HowToReg,
  OndemandVideo,
  ShoppingCartCheckout,
  Tag,
  ThumbUpAlt,
  VideoStable,
  ViewComfy,
} from "@mui/icons-material";

const TitleRing = (props) => {
  return (
    <Stack direction={"row"} spacing={1} marginBottom={3} sx={{ ...props }}>
      <Box
        component={"span"}
        sx={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: blue[500],
        }}
      />
      <Box
        component={"span"}
        sx={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: purple[200],
        }}
      />
      <Box
        component={"span"}
        sx={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: yellow[700],
        }}
      />
      <Box
        component={"span"}
        sx={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: green[300],
        }}
      />
      <Box
        component={"span"}
        sx={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: green[600],
        }}
      />
      <Box
        component={"span"}
        sx={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: red[600],
        }}
      />
      <Box
        component={"span"}
        sx={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: purple[400],
        }}
      />
    </Stack>
  );
};

const Home = () => {
  return (
    <>
      <Paper elevation={0} sx={{ pt: 8, pb: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs="12" lg="5">
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
                <Box sx={{ mt: 4 }}>
                  <Button variant="contained" size="large">
                    Choose Template
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "primary.dark", ml: 2 }}
                    size="large"
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs="12" lg="7">
              <Box>
                <Box
                  component={"img"}
                  src={bannerImage}
                  sx={{ width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          py: 8,
          backgroundImage: `url(${benefitForeground})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          backgroundSize: "contain",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item sx={12} lg={6}>
              <Card
                sx={{
                  border: "1px solid #eee",
                  mb: 2,
                }}
              >
                <CardContent>
                  <Stack direction={"row"} alignItems={"center"} spacing={4}>
                    <IconButton size="large" sx={{ backgroundColor: blue[50] }}>
                      <ThumbUpAlt fontSize="80px" color="primary" />
                    </IconButton>
                    <Box>
                      <Typography
                        variant="h6"
                        color="darkblue"
                        textTransform={"capitalize"}
                      >
                        easy online resume builder
                      </Typography>
                      <Typography variant="body1" color="gray" marginTop={1}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laudantium modi assumenda.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
              <Card
                sx={{
                  border: "1px solid #eee",
                  mb: 2,
                }}
              >
                <CardContent>
                  <Stack direction={"row"} alignItems={"center"} spacing={4}>
                    <IconButton
                      size="large"
                      sx={{ backgroundColor: orange[50] }}
                    >
                      <HowToReg fontSize="150px" color="warning" />
                    </IconButton>
                    <Box>
                      <Typography
                        variant="h6"
                        color="darkblue"
                        textTransform={"capitalize"}
                      >
                        step by step expert tips
                      </Typography>
                      <Typography variant="body1" color="gray" marginTop={1}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        skaj gjska consectetur adipisicing elit.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
              <Card
                sx={{
                  border: "1px solid #eee",
                  mb: 2,
                }}
              >
                <CardContent>
                  <Stack direction={"row"} alignItems={"center"} spacing={4}>
                    <IconButton
                      size="large"
                      sx={{ backgroundColor: green[50] }}
                    >
                      <ShoppingCartCheckout fontSize="150px" color="success" />
                    </IconButton>
                    <Box>
                      <Typography
                        variant="h6"
                        color="darkblue"
                        textTransform={"capitalize"}
                      >
                        Recruiter Approved Phrases
                      </Typography>
                      <Typography variant="body1" color="gray" marginTop={1}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laudantium modi.
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sx={12} lg={6}>
              <TitleRing />
              <Typography variant="h4" color={"darkblue"}>
                Why Choose Our Platform?
              </Typography>
              <Typography
                variant="body1"
                color={"gray"}
                sx={{ mt: 3, mb: 1, lineHeight: 2 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nunc scelerisque in.
              </Typography>
              <Typography variant="body1" color={"gray"} sx={{ lineHeight: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                eius molestiae facere, natus reprehenderit eaque eum, autem
                ipsam. Magni, error. Tempora odit laborum iure inventore
                possimus laboriosam qui nam. Fugit!
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{ textTransform: "uppercase", mt: 5 }}
              >
                Let's Build Your CV
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Paper elevation={0} sx={{ pt: 8, pb: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} lg={7}>
              <TitleRing />
              <Typography variant="h4" color={"darkblue"} sx={{ mb: 4 }}>
                We Deliver The Best
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                marginBottom={2}
              >
                <Box component={"img"} src={CheckImg} alt="check icon" />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Proven CV Templates to increase Hiring Chance
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                marginBottom={2}
              >
                <Box component={"img"} src={CheckImg} alt="check icon" />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Creative and Clean Templates Design
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                marginBottom={2}
              >
                <Box component={"img"} src={CheckImg} alt="check icon" />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Easy and Intuitive Online CV Builder
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                marginBottom={2}
              >
                <Box component={"img"} src={CheckImg} alt="check icon" />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Free to use. Developed by hiring professionals.
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                marginBottom={2}
              >
                <Box component={"img"} src={CheckImg} alt="check icon" />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Fast Easy CV and Resume Formatting
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                marginBottom={2}
              >
                <Box component={"img"} src={CheckImg} alt="check icon" />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Recruiter Approved Phrases.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Box component={"img"} src={CVImage} sx={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Paper elevation={0} sx={{ pt: 8, pb: 5 }}>
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundImage: `url(${DIYImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left",
            }}
          >
            <CardContent
              sx={{ padding: "60px!important", paddingLeft: "25%!important" }}
            >
              <Stack
                direction={"row"}
                flexWrap="wrap"
                spacing={5}
                justifyContent={"space-between"}
              >
                <Typography
                  variant="h4"
                  color={"darkblue"}
                  sx={{ maxWidth: { xs: "100%", lg: "50%" } }}
                >
                  Do you Need a Complete Custom CV Template?
                </Typography>

                <Box>
                  <Button variant="outlined" size="large">
                    Send a Request
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Paper>

      <Paper elevation={0} sx={{ pt: 8, pb: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <TitleRing />
              <Typography variant="h4" color={"darkblue"} sx={{ mb: 3 }}>
                Our Pricing
              </Typography>
              <Typography color="gray" variant="body1" lineHeight={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nunc scelerisque in.
              </Typography>
              <Box
                sx={{
                  border: "1px solid",
                  borderColor: blue[300],
                  textAlign: "center",
                  p: 2,
                  my: 2,
                }}
              >
                <Typography variant="h6" color={"primary"}>
                  Lets Build CV
                </Typography>
                <Typography variant="body2" color={"primary"}>
                  with 7days of Free Trial
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "600" }}
                  color={"primary"}
                >
                  Terms & Conditions
                </Typography>
                <Typography variant="body1" color={"gray"}>
                  subject to change with perior notice
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  backgroundImage: `url(${priceImg})`,
                  backgroundSize: "70% 40%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top right",
                }}
              >
                <CardContent>
                  <Box textAlign={"right"}>
                    <Typography variant="h3" color={"white.main"}>
                      $9.99
                    </Typography>
                    <Typography variant="h6" color={blue[100]}>
                      / month
                    </Typography>
                  </Box>

                  <Typography variant="h4" color={"darkblue"} sx={{ mt: 12 }}>
                    Monthly Pack
                  </Typography>

                  <Typography
                    variant="body1"
                    color={"gray"}
                    lineHeight={2}
                    sx={{ mb: 3, mt: 2 }}
                  >
                    You will be billed per month, and get unlimited access to
                    all resume Templates and new added one{" "}
                  </Typography>

                  <Button variant="outlined" size="large">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  backgroundImage: `url(${priceImg})`,
                  backgroundSize: "70% 40%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top right",
                }}
              >
                <CardContent>
                  <Box textAlign={"right"}>
                    <Typography variant="h3" color={"white.main"}>
                      $7.99
                    </Typography>
                    <Typography variant="h6" color={blue[100]}>
                      / month
                    </Typography>
                  </Box>

                  <Typography variant="h4" color={"darkblue"} sx={{ mt: 12 }}>
                    Yearly Pack
                  </Typography>

                  <Typography
                    variant="body1"
                    color={"gray"}
                    lineHeight={2}
                    sx={{ mb: 3, mt: 2 }}
                  >
                    You will be billed per month, and get unlimited access to
                    all resume Templates and new added one{" "}
                  </Typography>

                  <Button variant="outlined" size="large">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          pt: 8,
          pb: 5,
          backgroundImage: `url(${templateForeground})`,
          backgroundSize: "contain",
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <TitleRing justifyContent="center" />
          <Typography variant="h4" color={"darkblue"} sx={{ mb: 2 }}>
            Our Creative Templates
          </Typography>
          <Typography
            variant="body1"
            color={"gray"}
            sx={{ mb: 7, maxWidth: { xs: "100%", lg: "60%" }, mx: "auto" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
                <Box
                  component={"img"}
                  src={cv1}
                  alt="CV demo 1"
                  sx={{ maxBlockSize: "80%", width: "100%" }}
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    <Button
                      endIcon={<ArrowRightAlt />}
                      variant="contained"
                      color="primary"
                      size="medium"
                      sx={{ borderRadius: "50px" }}
                    >
                      SEE TEMPLATE
                    </Button>
                    <Button
                      endIcon={<ArrowRightAlt />}
                      variant="outlined"
                      color="primary"
                      size="medium"
                      sx={{ borderRadius: "50px" }}
                    >
                      USE TEMPLATE
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
                <Box
                  component={"img"}
                  src={cv2}
                  alt="CV demo 1"
                  sx={{ maxBlockSize: "80%", width: "100%" }}
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    <Button
                      endIcon={<ArrowRightAlt />}
                      variant="contained"
                      color="primary"
                      size="medium"
                      sx={{ borderRadius: "50px" }}
                    >
                      SEE TEMPLATE
                    </Button>
                    <Button
                      endIcon={<ArrowRightAlt />}
                      variant="outlined"
                      color="primary"
                      size="medium"
                      sx={{ borderRadius: "50px" }}
                    >
                      USE TEMPLATE
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
                <Box
                  component={"img"}
                  src={cv3}
                  alt="CV demo 1"
                  sx={{ maxBlockSize: "80%", width: "100%" }}
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    <Button
                      endIcon={<ArrowRightAlt />}
                      variant="contained"
                      color="primary"
                      size="medium"
                      sx={{ borderRadius: "50px" }}
                    >
                      SEE TEMPLATE
                    </Button>
                    <Button
                      endIcon={<ArrowRightAlt />}
                      variant="outlined"
                      color="primary"
                      size="medium"
                      sx={{ borderRadius: "50px" }}
                    >
                      USE TEMPLATE
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          pt: 8,
          pb: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <TitleRing justifyContent="center" />
          <Typography variant="h4" color={"darkblue"} sx={{ mb: 2 }}>
            Our Main Features
          </Typography>
          <Typography
            variant="body1"
            color={"gray"}
            sx={{ mb: 7, maxWidth: { xs: "100%", lg: "60%" }, mx: "auto" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <IconButton size="large" sx={{ backgroundColor: orange[50] }}>
                    <FilePresent
                      sx={{ height: "48px", width: "48px" }}
                      color="warning"
                    />
                  </IconButton>
                  <Typography variant="h6" color={"darkblue"} sx={{ my: 2 }}>
                    Proven CV Templates to increase Hiring Chance
                  </Typography>
                  <Typography variant="body1" color={"gray"}>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                    neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <IconButton size="large" sx={{ backgroundColor: blue[50] }}>
                    <VideoStable
                      sx={{ height: "48px", width: "48px" }}
                      color="primary"
                    />
                  </IconButton>
                  <Typography variant="h6" color={"darkblue"} sx={{ my: 2 }}>
                    Creative, Modern and Clean Templates Design
                  </Typography>
                  <Typography variant="body1" color={"gray"}>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                    neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <IconButton size="large" sx={{ backgroundColor: red[50] }}>
                    <OndemandVideo
                      sx={{ height: "48px", width: "48px" }}
                      color="error"
                    />
                  </IconButton>
                  <Typography variant="h6" color={"darkblue"} sx={{ my: 2 }}>
                    Easy and Intuitive Online CV and Resume Builder
                  </Typography>
                  <Typography variant="body1" color={"gray"}>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                    neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <IconButton size="large" sx={{ backgroundColor: green[50] }}>
                    <CreditCardOff
                      sx={{ height: "48px", width: "48px" }}
                      color="success"
                    />
                  </IconButton>
                  <Typography variant="h6" color={"darkblue"} sx={{ my: 2 }}>
                    Free to use. Developed by hiring professionals.
                  </Typography>
                  <Typography variant="body1" color={"gray"}>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                    neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <IconButton size="large" sx={{ backgroundColor: orange[50] }}>
                    <FormatPaint
                      sx={{ height: "48px", width: "48px" }}
                      color="warning"
                    />
                  </IconButton>
                  <Typography variant="h6" color={"darkblue"} sx={{ my: 2 }}>
                    Recruiter Approved Phrases with Module Notification.
                  </Typography>
                  <Typography variant="body1" color={"gray"}>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                    neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <IconButton size="large" sx={{ backgroundColor: blue[50] }}>
                    <ViewComfy
                      sx={{ height: "48px", width: "48px" }}
                      color="primary"
                    />
                  </IconButton>
                  <Typography variant="h6" color={"darkblue"} sx={{ my: 2 }}>
                    Fast Easy CV and Resume Formatting
                  </Typography>
                  <Typography variant="body1" color={"gray"}>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                    neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          pt: 8,
          pb: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <TitleRing justifyContent={"center"} />
          <Typography variant="h4" color={"darkblue"} sx={{ mb: 2 }}>
            Your Success, Our Inspiration
          </Typography>
          <Typography
            variant="body1"
            color={"gray"}
            sx={{ mb: 7, maxWidth: { xs: "100%", lg: "60%" }, mx: "auto" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{ width: "100px", height: "100px", mx: "auto" }}
                    src={testimonyImg1}
                    allt="Ellu P."
                  />
                  <Typography
                    variant="body1"
                    color={"gray"}
                    sx={{
                      mt: 3,
                      mb: 5,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis accumsan nisi Ut ut felis congue nisl hendrerit
                    commodo.
                  </Typography>
                  <Typography variant="h5" color={"darkblue"} sx={{ mb: 1 }}>
                    Ellu P.
                  </Typography>
                  <Typography
                    variant="body2"
                    color={"gray"}
                    sx={{ fontWeight: "bold" }}
                  >
                    One of our Clients
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "primary.main",
                    clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <IconButton
                    size="medium"
                    sx={{ position: "relative", left: "-20px" }}
                  >
                    <Tag
                      sx={{
                        height: "48px",
                        width: "48px",
                        color: "white.main",
                      }}
                    />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{ width: "100px", height: "100px", mx: "auto" }}
                    src={testimonyImg2}
                    allt="Ellu P."
                  />
                  <Typography
                    variant="body1"
                    color={"gray"}
                    sx={{
                      mt: 3,
                      mb: 5,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis accumsan nisi Ut ut felis congue nisl hendrerit
                    commodo.
                  </Typography>
                  <Typography variant="h5" color={"darkblue"} sx={{ mb: 1 }}>
                    Obi Nwanem
                  </Typography>
                  <Typography
                    variant="body2"
                    color={"gray"}
                    sx={{ fontWeight: "bold" }}
                  >
                    One of our Clients
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "primary.main",
                    clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <IconButton
                    size="medium"
                    sx={{ position: "relative", left: "-20px" }}
                  >
                    <Tag
                      sx={{
                        height: "48px",
                        width: "48px",
                        color: "white.main",
                      }}
                    />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{ width: "100px", height: "100px", mx: "auto" }}
                    src={testimonyImg3}
                    allt="Ellu P."
                  />
                  <Typography
                    variant="body1"
                    color={"gray"}
                    sx={{
                      mt: 3,
                      mb: 5,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis accumsan nisi Ut ut felis congue nisl hendrerit
                    commodo.
                  </Typography>
                  <Typography variant="h5" color={"darkblue"} sx={{ mb: 1 }}>
                    Balablu Blublu
                  </Typography>
                  <Typography
                    variant="body2"
                    color={"gray"}
                    sx={{ fontWeight: "bold" }}
                  >
                    One of our Clients
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "primary.main",
                    clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <IconButton
                    size="medium"
                    sx={{ position: "relative", left: "-20px" }}
                  >
                    <Tag
                      sx={{
                        height: "48px",
                        width: "48px",
                        color: "white.main",
                      }}
                    />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default Home;
