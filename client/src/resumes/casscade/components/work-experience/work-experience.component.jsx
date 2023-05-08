import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

function ExperienceItem({ item }) {
  const { date, company, position, story } = item;

  return (
    <Box
      sx={{
        lineHeight: 2,
        mt: 3,
        color: "black",
        position:"relative",
        "::before": {
          content: "''",
          display: "inline-block",
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          border:"2px solid",
          borderColor: blue[500],
          position:"absolute",
          left:"-21.5px",
          top:"0px"
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{ mb: 2, fontWeight: "600", color: "black",lineHeight:.8 }}
      >
        {date}
      </Typography>
      <Typography variant="body1" sx={{mb:1}}> {position} ({company})</Typography>
      <Typography variant="body2" color={"gray"}>
        {story}
      </Typography>
    </Box>
  );
}

function WorkExperience({ experience }) {
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
        sx={{ mb: 2 }}
      >
        Work Experience
      </Typography>
      <Box
        borderLeft={"2px solid"}
        borderColor={blue[500]}
        sx={{ pl: 2,ml:2 }}
        color={"gray"}
        textAlign={"justify"}
      >
        {experience.map((item) => (
          <ExperienceItem key={item.date} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default WorkExperience;
