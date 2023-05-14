import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

function Hobbies({ hobbies }) {
  return (
    <Box
      sx={{ pb: 2, pt: 2 }}
    >
      <Typography
        variant="h6"
        color={blue[500]}
        textTransform={"uppercase"}
        sx={{ mb: 1 }}
      >
        Hobbies
      </Typography>
      <Box
     
        color={"gray"}
        textAlign={"justify"}
      >
        <Box component={"ul"} sx={{display:"flex",pl:3}}>
          {hobbies.map((item) => (
            <Box component={"li"} sx={{mr:5}} key={item}>{item}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Hobbies;
