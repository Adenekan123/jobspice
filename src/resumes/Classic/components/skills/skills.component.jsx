import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

import { useSelector } from "react-redux";
import { selectSkills } from "../../../../store/resume/resume.selector";

function Skill({skill}){
    const {title,level} = skill;
    return (<Stack direction={"row"} alignItems={"center"} spacing={1} sx={{mb:1}}>
        <Typography sx={{fontSize:"12px"}} fontWeight={"bold"} color={"white.main"} textTransform={"uppercase"}>{title}</Typography>
        <LinearProgress color="primary" value={level} variant="determinate" sx={{width:"100%"}} />
        <Box component={"small"}>{level}%</Box>
    </Stack> )
}

function Skills() {
  const skills = useSelector(selectSkills);
  console.log(skills)
  return (
    <Box
    sx={{borderBottom:"2px solid", borderColor:blue['A100'],py:2}}
    >
      <Typography
        variant="body1"
        color={"white.main"}
        textTransform={"uppercase"}
        sx={{fontWeight:"bold", mb:2 }}
      >
        Skills
      </Typography>
      

      <Box color={"white.main"}>
            {skills && skills.length && skills.map(skill=> <Skill key={skill.title} skill={skill} />)}
      </Box>
    </Box>
  );
}

export default Skills;
