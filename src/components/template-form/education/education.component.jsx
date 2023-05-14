import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const education_initialState = {
  schoold: "",
  field: "",
  location: "",
  degree: "",
  start_date: "",
  end_date: "",
};
const Education = ({ nextStep, prevStep, updateSections, education }) => {
  const [data, setData] = useState(education_initialState);
  const { list, index } = education;

  const { school, field, location, degree, start_date, end_date } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onNextClick = () => {
    const newList = list[index] ?  list.map((item,i)=> i === index ? data : item) :  list.concat(data);
    updateSections({
      education: { ...education, list: newList, index: newList.length - 1 },
    });
    nextStep();
  };

  const onPrevClick = () => {
    prevStep();
  };

  useEffect(() => {
    if (list.length && list[index]) setData(list[index]);
  }, [list, index]);
  return (
    <Paper>
      <Typography variant="h4" color="primary">
        {education.list.length
          ? "Tell us about your education"
          : "Tell us about your education"}
      </Typography>
      <Typography variant="h6" color="gray">
        Include every school, even if you're still there or didn't graduate.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="text"
              value={school}
              name="school"
              label="School Name"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="text"
              value={location}
              name="location"
              label="School Location"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="text"
              value={degree}
              name="degree"
              label="Degree"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="text"
              value={field}
              name="field"
              label="Field of study"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="date"
              value={start_date}
              name="start_date"
              label="Graduation Start Date"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="date"
              value={end_date}
              name="end_date"
              label="Graduation End Date"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ mt: 4 }}
        >
          <Button type="button" variant="contained" onClick={onPrevClick}>
            Prevoius
          </Button>
          <Button type="button" variant="contained" onClick={onNextClick}>
            Next
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default Education;
