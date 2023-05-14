import { useRef } from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";

import Casscade from "../../resumes/casscade/casscade.component";
import { useReactToPrint } from "react-to-print";

// Define a function to capture and save the HTML

function Template({ selectedResume }) {
  const componentRef = useRef();

  const savePDF = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Typography>Template</Typography>
      <Paper sx={{ backgroundColor: "#333", py: 2 }}>
        <Container
          maxWidth="md"
          sx={{ minHeight: "100vh", padding: "0px!important" }}
          ref={componentRef}
        >
          <Casscade />
        </Container>
      </Paper>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button variant="contained" onClick={savePDF}>
          Download
        </Button>
      </Box>
    </>
  );
}

export default Template;
