import { FacebookSharp, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

import { useSelector } from "react-redux";
import { selectSocial } from "../../../../store/resume/resume.selector";

function Social() {

  const { facebook,twitter,linkedin,instagram,youtube } = useSelector(selectSocial);
  return (
    <Box
    sx={{py:2}}
    >
      <Typography
        variant="body1"
        color={"white.main"}
        textTransform={"uppercase"}
        sx={{fontWeight:"bold", mb:2  }}
      >
        Social
      </Typography>

      <Box color={"white.main"}>
        <Stack spacing={2}>
          {facebook ? (
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <IconButton sx={{backgroundColor:blue[50]}}>
                <FacebookSharp sx={{width:"16px",height:"16px",color:blue[500]}}/>
              </IconButton>
              <Box>
                <Typography variant="body" sx={{display:"block"}}>Facebook</Typography> 
                <Typography variant="caption">{facebook.handle}</Typography> 
              </Box>
            </Stack>
          ) : (
            ""
          )}

          {twitter ? (
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <IconButton sx={{backgroundColor:blue[50]}}>
                <Twitter sx={{width:"16px",height:"16px",color:blue[500]}}/>
              </IconButton>
              <Box>
                <Typography variant="body" sx={{display:"block"}}>Twitter</Typography> 
                <Typography variant="caption">{twitter.handle}</Typography> 
              </Box>
            </Stack>
          ) : (
            ""
          )}

          {linkedin ? (
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <IconButton sx={{backgroundColor:blue[50]}}>
                <LinkedIn sx={{width:"16px",height:"16px",color:blue[500]}}/>
              </IconButton>
              <Box>
                <Typography variant="body" sx={{display:"block"}}>LinkedIn</Typography> 
                <Typography variant="caption">{linkedin.handle}</Typography> 
              </Box>
            </Stack>
          ) : (
            ""
          )}
          {youtube ? (
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <IconButton sx={{backgroundColor:blue[50]}}>
                <YouTube sx={{width:"16px",height:"16px",color:blue[500]}}/>
              </IconButton>
              <Box>
                <Typography variant="body" sx={{display:"block"}}>Youtube</Typography> 
                <Typography variant="caption">{youtube.handle}</Typography> 
              </Box>
            </Stack>
          ) : (
            ""
          )}
          {instagram ? (
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <IconButton sx={{backgroundColor:blue[50]}}>
                <Instagram sx={{width:"16px",height:"16px",color:blue[500]}}/>
              </IconButton>
              <Box>
                <Typography variant="body" sx={{display:"block"}}>Instagram</Typography> 
                <Typography variant="caption">{instagram.handle}</Typography> 
              </Box>
            </Stack>
          ) : (
            ""
          )}
        </Stack>
      </Box>
    </Box>
  );
}

export default Social;
