import { useSelector } from "react-redux";
import { selectExperience } from "../../../../store/resume/resume.selector";


import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

function ExperienceItem({ item,index }) {
  const { employer, title, start_date, end_date, story } = item;

  return (
    <Box
      sx={{
        lineHeight: 2,
        mt: index !== 0 ? 3:2 ,
        color: "black",
        position: "relative",
        "::before": {
          content: "''",
          display: "inline-block",
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          border: "1px solid",
          borderColor: blue[500],
          position: "absolute",
          left: "-21px",
          top: "0px",
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{ mb: 2, fontWeight: "600", color: "black", lineHeight: 0.8 }}
      >
        {start_date} - {end_date}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {title} ({employer})
      </Typography>
      <Typography variant="body1">Roles</Typography>
      <Box component={"ul"} sx={{ml:2,fontFamily:'"Roboto","Helvetica","Arial",sans-serif',fontSize:"14px"}}>
        {story &&
          story.length &&
          story.map((item) => (
            <Box key={item.substr(8)} color={"gray"} component={"li"} sx={{lineHeight:1.5}}>
              {item}
            </Box>
          ))}
      </Box>
    </Box>
  );
}

function WorkExperience() {
  const {list:experience} = useSelector(selectExperience)
  return (
    <Box
      sx={{ pb: 3, pt: 2 }}
      borderBottom={"1px solid"}
      borderColor={blue[500]}
    >
      <Typography
        variant="h6"
        color={blue[500]}
        textTransform={"uppercase"}
        sx={{ mb: 1 }}
      >
        Work Experience
      </Typography>
      <Box
        borderLeft={"1px solid"}
        borderColor={blue[500]}
        sx={{ pl: 2, ml: 1 }}
        color={"gray"}
        textAlign={"justify"}
      >
        {experience && experience.length && experience.map((item,index) => (
          <ExperienceItem key={item.start_date+index} item={item} index={index} />
        ))}
      </Box>
    </Box>
  );
}

export default WorkExperience;
