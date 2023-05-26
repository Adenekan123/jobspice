import {
  Stack,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowRightAlt, HourglassTopSharp } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setSelectedTemplate } from "../../store/resume/resume.actions";

const TemplatesList = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectTemplate = (templateid) => {
    dispatch(setSelectedTemplate(templateid));
    navigate("/templates/form");
  };

  return (
    <Grid container spacing={4}>
      {
        data.length && data.map(template=>{
          const {id,title,image,comingSoon} = template;
          return(
            <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)",position:"relative" }}>
             
              <Box
                component={"img"}
                src={image}
                alt={title}
                sx={{ maxBlockSize: "80%", width: "100%" }}
              />
              <CardContent>
                <Stack direction={"row"} spacing={2} justifyContent={"center"}>
                  {/* <Button
                    endIcon={<ArrowRightAlt />}
                    variant="contained"
                    color="primary"
                    size="medium"
                    sx={{ borderRadius: "50px" }}
                  >
                    SEE TEMPLATE
                  </Button> */}
                  <Button
                    disabled={comingSoon}
                    onClick={() => handleSelectTemplate(id)}
                    endIcon={ comingSoon ? <HourglassTopSharp/> :<ArrowRightAlt />}
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{ borderRadius: "50px" }}
                  >
                    {comingSoon ? "Coming Soon" : "USE TEMPLATE"}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          )
        })
      }
      
     
      {/* <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
          <Box
            component={"img"}
            src={cv3}
            alt="CV demo 1"
            sx={{ maxBlockSize: "80%", width: "100%" }}
          />
          <CardContent>
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              <Button
                endIcon={<ArrowRightAlt />}
                variant="contained"
                color="primary"
                size="medium"
                sx={{ borderRadius: "50px" }}
              >
                SEE TEMPLATE
              </Button>
              <Button
                endIcon={<ArrowRightAlt />}
                variant="outlined"
                color="primary"
                size="medium"
                sx={{ borderRadius: "50px" }}
              >
                USE TEMPLATE
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
          <Box
            component={"img"}
            src={cv1}
            alt="CV demo 1"
            sx={{ maxBlockSize: "80%", width: "100%" }}
          />
          <CardContent>
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              <Button
                endIcon={<ArrowRightAlt />}
                variant="contained"
                color="primary"
                size="medium"
                sx={{ borderRadius: "50px" }}
              >
                SEE TEMPLATE
              </Button>
              <Button
                endIcon={<ArrowRightAlt />}
                variant="outlined"
                color="primary"
                size="medium"
                sx={{ borderRadius: "50px" }}
              >
                USE TEMPLATE
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
          <Box
            component={"img"}
            src={cv2}
            alt="CV demo 1"
            sx={{ maxBlockSize: "80%", width: "100%" }}
          />
          <CardContent>
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              <Button
                endIcon={<ArrowRightAlt />}
                variant="contained"
                color="primary"
                size="medium"
                sx={{ borderRadius: "50px" }}
              >
                SEE TEMPLATE
              </Button>
              <Button
                endIcon={<ArrowRightAlt />}
                variant="outlined"
                color="primary"
                size="medium"
                sx={{ borderRadius: "50px" }}
              >
                USE TEMPLATE
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ boxShadow: "0 20px 25px rgba(0,0,0,6%)" }}>
          <Box
            component={"img"}
            src={cv3}
            alt="CV demo 1"
            sx={{ maxBlockSize: "80%", width: "100%" }}
          />
          <CardContent>
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              <Button
                endIcon={<ArrowRightAlt />}
                variant="contained"
                color="primary"
                size="medium"
                sx={{ borderRadius: "50px" }}
              >
                SEE TEMPLATE
              </Button>
              <Button
                endIcon={<ArrowRightAlt />}
                variant="outlined"
                color="primary"
                size="medium"
                sx={{ borderRadius: "50px" }}
              >
                USE TEMPLATE
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
};

export default TemplatesList;
