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

  const experience_initialState = {
    employer: "",
    country: "",
    city: "",
    title: "",
    start_date: "",
    end_date: "",
    story:[]
  };
const Experience = ({ nextStep, prevStep, updateSections, experience }) => {
    const [data, setData] = useState(experience_initialState);
    const { list, index } = experience;
  
    const { employer, country, city, title, start_date, end_date } = data;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };
    const onNextClick = () => {
      const newList = list.concat(data);
      updateSections({ experience: { ...experience, list: newList,index:newList.length - 1 } });
      nextStep();
    };
  
    const onPrevClick = () => {
      prevStep();
    };
  
    useEffect(() => {
      if(list.length && list[index]) setData(list[index]);
    }, [list, index]);
    return (
      <Paper>
        <Typography variant="h4" color="primary">
          {experience.list.length ? "Tell us about your previous job" : "Tell us about your current job"}
          
        </Typography>
        <Typography variant="h6" color="gray">
          We’ll put your work history in the right order.
        </Typography>
  
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                value={title}
                name="title"
                label="Job Title"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                value={employer}
                name="employer"
                label="Employer"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                value={city}
                name="city"
                label="City"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                value={country}
                name="country"
                label="Country"
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
                label="Start Date"
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
                label="End Date"
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

  export default Experience;