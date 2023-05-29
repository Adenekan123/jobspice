import {
  Breadcrumbs,
  Paper,
  Stack,
  Typography,
  Container,
} from "@mui/material";

import templateForeground from "../../assets/ring-bg.png";
import { TitleRing } from "../../routes/home/home.route";

import TemplatesList from "../templates-list/templates-list.component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllTemplates } from "../../store/template/template.selectors";

const ResumeTemplates = () => {
    const templates = useSelector(selectAllTemplates);
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
          <TemplatesList data={templates} />
        </Container>
      </Paper>
    </>
  );
};

export default ResumeTemplates;
