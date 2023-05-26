import { useRef,Suspense } from "react";
import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
// import Casscade from "../../resumes/casscade/casscade.component";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import { selectTemplate } from "../../store/resume/resume.selector";

// Define a function to capture and save the HTML


function Template({onPrevious}) {
  const componentRef = useRef();
  const {template:Component} = useSelector(selectTemplate);

  const savePDF = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      
      <Paper sx={{ backgroundColor: "#333", py: 2 }}>
        <Container
          maxWidth="md"
          sx={{ minHeight: "100vh", padding: "0px!important" }}
          ref={componentRef}
        >
         {Component ?<Suspense fallback={<Box><Typography variant="h3">Loading...</Typography></Box>}><Component /> </Suspense> : <Typography variant="h4">We dont't have this template currently Please check our available templates in templates page.</Typography>}
        </Container>
      </Paper>
      <Stack direction={"row"} spacing={3} justifyContent={"center"} sx={{ mt: 4, textAlign: "center" }}>
        <Button variant="contained" onClick={savePDF}>
          Download
        </Button>
        <Button color="success" variant="contained" onClick={()=>onPrevious(1)}>
          Edit
        </Button>
      </Stack>
    </>
  );
}

export default Template;
