import {
    Breadcrumbs,
    Paper,
    Stack,
    Typography,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
  } from "@mui/material";
  import { Link } from "@mui/material";
  import { ArrowRightAlt } from "@mui/icons-material";
  
  import { TitleRing } from "../../routes/home/home.route";
  import templateForeground from "../../assets/ring-bg.png";
  import cv1 from "../../assets/demo-1.png";
  import cv2 from "../../assets/demo-2.png";
  import cv3 from "../../assets/demo-3.png";
  
  const TemplatesList = () => {
    return (
      <>
        <Paper
          sx={{
            py: 12,
            backgroundImage:
              "repeating-conic-gradient(from 30deg, #417ef7 0% 60deg, #2e5df7 0% 120deg)",
            backgroundSize: "32px 55px",
            backgroundColor: "#2e5df7",
          }}
        >
          <Stack spacing={5} alignItems={"center"}>
            <Typography variant="h3" color={"white.main"}>
              Our Templates
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="white.main" href="/">
                Home
              </Link>
              <Typography color="white.main">Templates</Typography>
            </Breadcrumbs>
          </Stack>
        </Paper>
        <Paper
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
      </>
    );
  };
  
  export default TemplatesList;
  