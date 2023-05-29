import { Box, Card, Grid, Paper, Stack } from "@mui/material";

import { blue } from "@mui/material/colors";

import Summary from "./components/summary/summary.component";
import WorkExperience from "./components/work-experience/work-experience.component";
import Education from "./components/education/education.component";
import Hobbies from "./components/hobbies/hobbies.component";
import PersonalInfo from "./components/personal-info/personal-info.component";
import Skills from "./components/skills/skills.component";
import Social from "./components/social/social.component";
import ProfileImageUpload from "../../components/profile-image-upload";

import './casscade.css';

function Casscade() {
  return (
    <Grid container sx={{ height: "100%"}}>
      <Grid item xs={12} md={4} className="aside">
        <Paper
          square={true}
          sx={{ height: "100%", backgroundColor: blue[500] }}
        >
          <Stack>
            <Card  sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  objectPosition: "center",
                  background: "#eee",
                }}>
          
              <ProfileImageUpload/>
            </Card>
            <Box sx={{ p: 2 }}>
              <PersonalInfo />
              <Skills />
              <Social />
            </Box>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} className="main">
        <Paper
          square={true}
          sx={{ height: "100%", backgroundColor: "white.main", p: 2 }}
        >
          <Summary />
          <WorkExperience />
          <Education />
          <Hobbies />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Casscade;
