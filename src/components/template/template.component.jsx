import { useRef,Suspense } from "react";
import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
// import Casscade from "../../resumes/casscade/casscade.component";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import { selectTemplate } from "../../store/resume/resume.selector";
// import {useMediaQuery} from "@mui/material";
// import snapAndDownloadToPDF from "../../utils/html2canvas.utils";

// Define a function to capture and save the HTML


function Template({onPrevious}) {
  const componentRef = useRef();
  const {template:Component} = useSelector(selectTemplate);
  // const isMobile = useMediaQuery('(max-width:800px)')

  const savePDF =  useReactToPrint({
    content: () => componentRef.current,
  });
  // const savePDF = () =>{
  //   snapAndDownloadToPDF(componentRef.current,{},'Adenekan Usman.pdf',componentRef.current.clientWidth,componentRef.current.clientHeight);
  // }

  return (
    <>
      <Paper sx={{ backgroundColor: "#333", py: 2 }}>
        <Container
          maxWidth="md"
          sx={{ minHeight: "100vh", padding: "0px!important" }}
          ref={componentRef}
        >
         <Suspense fallback={<Box><Typography variant="h3">Loading...</Typography></Box>}><Component /> </Suspense>
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
