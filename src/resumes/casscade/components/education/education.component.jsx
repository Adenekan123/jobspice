import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

import { useSelector } from "react-redux";
import { selectEducation } from "../../../../store/resume/resume.selector";

function EducationItem({ item,index }) {
  const { start_date,end_date, school, field, degree } = item;

  return (
    <Box
      sx={{
        lineHeight: 2,
        mt: index !== 0 ? 3:2 ,
        color: "black",
        position:"relative",
        "::before": {
          content: "''",
          display: "inline-block",
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          border:"1px solid",
          borderColor: blue[500],
          position:"absolute",
          left: "-21px",
          top:"0px"
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{ mb: 2, fontWeight: "600", color: "black",lineHeight:.8 }}
      >
        {start_date} - {end_date}
      </Typography>
      <Typography variant="body1" sx={{mb:1}}>{field} ({school})</Typography>
      <Typography variant="body2" color={"gray"}>
        {degree}
      </Typography>
    </Box>
  );
}

function Education() {
  const {list:education} = useSelector(selectEducation)
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
        sx={{ mb: 0 }}
      >
       Education
      </Typography>
      <Box
        borderLeft={"1px solid"}
        borderColor={blue[500]}
        sx={{ pl: 2,ml:1 }}
        color={"gray"}
        textAlign={"justify"}
      >
        {education.map((item,index) => (
          <EducationItem key={item.start_date+index} item={item} index={index} />
        ))}
      </Box>
    </Box>
  );
}

export default Education;
