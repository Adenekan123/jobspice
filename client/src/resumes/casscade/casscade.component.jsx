import { useContext } from "react";

import { ResumeContext } from "../contexts/resume.context";

import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import profileImg from "../../assets/1.jpg";
import { blue } from "@mui/material/colors";

import Summary from "./components/summary/summary.component";
import WorkExperience from "./components/work-experience/work-experience.component";
import Education from "./components/education/education.component";
import Hobbies from "./components/hobbies/hobbies.component";
import PersonalInfo from "./components/personal-info/personal-info.component";
import Skills from "./components/skills/skills.component";
import Social from "./components/social/social.component";




function Casscade() {
  const {
    sections: {
      summary,
      personalInfo,
      experience,
      education,
      hobbies,
      skills,
      social,
    },
  } = useContext(ResumeContext);


  return (
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={4}>
            <Paper
              square={true}
              sx={{ height: "100%", backgroundColor: blue[500] }}
            >
              <Stack>
                <Card>
                  <CardMedia
                    image={profileImg}
                    sx={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Card>
                <Box sx={{ p: 2 }}>
                  {personalInfo ? (
                    <PersonalInfo personalInfo={personalInfo} />
                  ) : (
                    ""
                  )}
                  {skills ? <Skills skills={skills} /> : ""}
                  {social ? <Social social={social} /> : ""}
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper
              square={true}
              sx={{ height: "100%", backgroundColor: "white.main", p: 2 }}
            >
              {summary ? <Summary summary={summary} /> : ""}
              {experience && experience.list.length  ? <WorkExperience experience={experience.list} /> : ""}
              {education && education.list.length ? <Education education={education.list} /> : ""}
              {hobbies && hobbies.length ? <Hobbies hobbies={hobbies} /> : ""}
            </Paper>
          </Grid>
        </Grid>
  );
}

export default Casscade;
