import { useState, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import "react-quill/dist/quill.snow.css";

import template from "../../assets/demo-1.png";

import { ResumeContext } from "../../resumes/contexts/resume.context";

import PersonalDetails from "./personal-details.component";
import Experience from "./experience.componet";
import ExperienceDescription from "./experienceDescription.component";
import ExperienceDescriptionPreview from "./experience-description-preview";




function TemplateForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const { sections, updateSections } = useContext(ResumeContext);

  const { personalInfo, experience } = sections;

  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const onPrevious = (index) => {
   index ? setCurrentStep(index) : setCurrentStep(currentStep - 1);
  };

  return (
    <Paper sx={{ py: 5 }}>
      <Container maxWidth="lg">
        {![3,4].includes(currentStep) && (
          <Grid container spacing={5} justifyContent={"space-between"}>
            <Grid item xs={12} md={7}>
              {currentStep === 1 && (
                <PersonalDetails
                  nextStep={onNext}
                  info={personalInfo}
                  updateSections={updateSections}
                />
              )}
              {currentStep === 2 && (
                <Experience
                  nextStep={onNext}
                  prevStep={onPrevious}
                  experience={experience}
                  updateSections={updateSections}
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component={"img"}
                  src={template}
                  sx={{ display: "block", width: "100%", mb: 2 }}
                />
                <Button variant="outlined">Change Template</Button>
              </Box>
            </Grid>
          </Grid>
        )}
        {currentStep === 3 && (
          <ExperienceDescription
            nextStep={onNext}
            prevStep={onPrevious}
            experience={experience}
            updateSections={updateSections}
          />
        )}
        {currentStep === 4 && (
          <ExperienceDescriptionPreview
            nextStep={onNext}
            prevStep={onPrevious}
            experience={experience}
            updateSections={updateSections}
          />
        )}
      </Container>
    </Paper>
  );
}

export default TemplateForm;
