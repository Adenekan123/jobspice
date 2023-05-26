import { useState} from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import "react-quill/dist/quill.snow.css";

import template from "../../assets/demo-1.png";


import PersonalDetails from "./personalInfo/personal-details.component";
import Experience from "./experience/experience.componet";
import ExperienceDescription from "./experience/experienceDescription.component";
import ExperienceDescriptionPreview from "./experience/experience-description-preview";
import Education from "./education/education.component";
import EducationPreview from "./education/education-preview";
import Skills from "./skills/skills.component";
import Summary from "./summary/summary.component";
import Template from "../template/template.component";



function TemplateForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const onPrevious = (index) => {
   index ? setCurrentStep(index) : setCurrentStep(currentStep - 1);
  };

  return (
    <Paper sx={{ py: 5 }}>
      <Container maxWidth="lg">
        {![3,4,6,8,9].includes(currentStep) && (
          <Grid container spacing={5} justifyContent={"space-between"}>
            <Grid item xs={12} md={7}>
              {currentStep === 1 && (
                <PersonalDetails
                  nextStep={onNext}
                />
              )}
              {currentStep === 2 && (
                <Experience
                  nextStep={onNext}
                  prevStep={onPrevious}
                />
              )}
              {currentStep === 5 && (
                <Education
                  nextStep={onNext}
                  prevStep={onPrevious}
                />
              )}
              {currentStep === 7 && (
                <Skills
                  nextStep={onNext}
                  prevStep={onPrevious}
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
            
          />
        )}
        {currentStep === 4 && (
          <ExperienceDescriptionPreview
            nextStep={onNext}
            prevStep={onPrevious}
          />
        )}
        {currentStep === 6 && (
          <EducationPreview
            nextStep={onNext}
            prevStep={onPrevious}
          />
        )}
        {currentStep === 8 && (
          <Summary
            nextStep={onNext}
            prevStep={onPrevious}
          />
        )}
        {currentStep === 9 && (
          <Template onPrevious={onPrevious}/>
        )}
      </Container>
    </Paper>
  );
}

export default TemplateForm;
