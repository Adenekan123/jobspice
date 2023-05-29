import { Email, Map, PhoneAndroid, Web } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

import { useSelector } from "react-redux";
import { selectPersonalInfo } from "../../../../store/resume/resume.selector";

function PersonalInfo() {
  const { fullname, country, city, postal, email, phone, profession, website } =
  useSelector(selectPersonalInfo);
  return (
    <Box sx={{ borderBottom: "2px solid", borderColor: blue["A100"], pb: 2 }}>
      <Typography
        variant="body1"
        color={"white.main"}
        textTransform={"uppercase"}
        sx={{ fontWeight: "bold" }}
      >
        {fullname}
      </Typography>
      <Typography
        variant="body2"
        color={"darkblue"}
        textTransform={"capitalize"}
        sx={{ mb: 2, fontWeight: "bold" }}
      >
        {profession}
      </Typography>

      <Box color={"white.main"}>
        <Stack spacing={1}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <IconButton sx={{ backgroundColor: blue[50] }}>
              <Map sx={{ width: "16px", height: "16px", color: blue[500] }} />
            </IconButton>
            <Typography variant="caption">
              {city}, {country} - {postal}
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <IconButton sx={{ backgroundColor: blue[50] }}>
              <PhoneAndroid
                sx={{ width: "16px", height: "16px", color: blue[500] }}
              />
            </IconButton>
            <Typography variant="caption">{phone}</Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <IconButton sx={{ backgroundColor: blue[50] }}>
              <Email sx={{ width: "16px", height: "16px", color: blue[500] }} />
            </IconButton>
            <Typography variant="caption">{email}</Typography>
          </Stack>
          {website && (
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <IconButton sx={{ backgroundColor: blue[50] }}>
                <Web sx={{ width: "16px", height: "16px", color: blue[500] }} />
              </IconButton>
              <Typography variant="caption">{website}</Typography>
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

export default PersonalInfo;
