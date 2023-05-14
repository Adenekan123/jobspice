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





const initialState = {
    fullname: "",
    country: "",
    city: "",
    postal: "",
    email: "",
    phone: "",
    website: "",
    profession: "",
  };

const PersonalDetails = ({ nextStep, info, updateSections }) => {
    const [data, setData] = useState(initialState);
  
    const { fullname, country, city, postal, email, phone, profession } = data;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };
  
    const onNextClick = () => {
      nextStep();
      updateSections({ personalInfo: data });
    };
  
    useEffect(() => {
     if(info) setData(info);
    }, [info]);
    return (
      <Paper>
        <Typography variant="h4" color="primary">
          What’s the best way for employers to contact you?
        </Typography>
        <Typography variant="h6" color="gray">
          We suggest including an email and phone number.
        </Typography>
  
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                value={fullname}
                label="Full Name"
                name="fullname"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                label="Profession"
                value={profession}
                name="profession"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                label="City"
                value={city}
                name="city"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                type="text"
                label="Country"
                value={country}
                name="country"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                type="text"
                label="Postal Code"
                value={postal}
                name="postal"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                label="Phone"
                value={phone}
                name="phone"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                label="Email"
                value={email}
                name="email"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
  
          <Stack direction={"row"} justifyContent={"end"} sx={{ mt: 4 }}>
            <Button type="button" variant="contained" onClick={onNextClick}>
              Next
            </Button>
          </Stack>
        </Box>
      </Paper>
    );
  };

  export default PersonalDetails;