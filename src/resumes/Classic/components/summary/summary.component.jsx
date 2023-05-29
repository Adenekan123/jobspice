import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

import { useSelector } from "react-redux";
import { selectSummary } from "../../../../store/resume/resume.selector";

function Summary() {
  const summary = useSelector(selectSummary);
  return (
    <Box sx={{pb:3}} borderBottom={"1px solid"} borderColor={blue[500]}>
      <Typography variant="h6" color={blue[500]} textTransform={"uppercase"} sx={{mb:1}}>summary</Typography>
      <Typography variant="body2" color={"gray"} textAlign={"justify"}>{summary}</Typography>
    </Box>
  );
}

export default Summary;
