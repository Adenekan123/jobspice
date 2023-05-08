import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

function Summary({ summary }) {
  return (
    <Box sx={{pb:3}} borderBottom={"1px solid"} borderColor={blue[500]}>
      <Typography variant="h6" color={blue[500]} textTransform={"uppercase"} sx={{mb:2}}>summary</Typography>
      <Typography variant="body2" color={"gray"} textAlign={"justify"}>{summary}</Typography>
    </Box>
  );
}

export default Summary;
