import { useState, useEffect, memo } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Add } from "@mui/icons-material";

const Skill = memo(({ title, level, onChange, onDelete }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Rating name="level" value={level} precision={0.5} onChange={onChange} />
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <TextField
          name="title"
          value={title}
          fullWidth
          placeholder="Enter Skill"
          onChange={onChange}
        />
        <Box>
          <IconButton onClick={onDelete}>
            <DeleteForeverOutlinedIcon />
          </IconButton>
        </Box>
      </Stack>
    </Stack>
  );
});

const initialStateObj = { title: "", level: 0 };

const Skills = ({ nextStep, prevStep, skills, updateSections }) => {
  const [data, setData] = useState([initialStateObj]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newSkills = data.map((skill, i) =>
      i === index
        ? name === "level"
          ? { ...skill, [name]: value * 20 }
          : { ...skill, [name]: value }
        : skill
    );
    setData(newSkills);
  };

  const handleAddMore = () => {
    const newSkills = data.concat(initialStateObj);
    setData(newSkills);
  };

  const handleDelete = (skillIndex) => {
    const newSkills = data.filter((skill, index) => index !== skillIndex);
    setData(newSkills);
  };

  const onNextClick = () => {
    nextStep();
    updateSections({ skills: data });
  };

  const onPrevClick = () => {
    prevStep();
  };

  useEffect(() => {
    if (skills.length) setData(skills);
  }, [skills]);

  return (
    <Paper>
      <Typography variant="h4" color="primary">
        What skills would you like to highlight?
      </Typography>

      <Stack
        spacing={2}
        sx={{
          mt:4,
          maxHeight: "520px",
          overflow: "hidden",
          overflowY: "auto",
        }}
      >
        {data.map((skill, index) => {
          const { title, level } = skill;
          return (
            <Skill
              key={index}
              title={title}
              level={level / 20}
              onChange={(e) => handleChange(e, index)}
              onDelete={() => handleDelete(index)}
            />
          );
        })}
        <Box sx={{ textAlign: "right" }}>
          <Button variant="text" startIcon={<Add />} onClick={handleAddMore}>
            Add one more
          </Button>
        </Box>
      </Stack>
      <Stack direction={"row"} justifyContent="space-between" sx={{ mt: 4 }}>
        <Button type="button" variant="contained" onClick={onPrevClick}>
          Prevoius
        </Button>
        <Button type="button" variant="contained" onClick={onNextClick}>
          Next
        </Button>
      </Stack>
    </Paper>
  );
};

export default Skills;
