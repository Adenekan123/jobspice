import { createTheme } from "@mui/material";
import { red,blue} from '@mui/material/colors';


// A custom theme for this app
const theme = createTheme({
    palette: {
      primary: {
        main: blue[600],
        light:blue[200],
        dark: blue[900],
      },
      secondary: {
        main: '#19857b',
      },
      white: {
        main: '#fff',
      },
      
      error: {
        main: red.A400,
      },
    },
    components: {
        // Name of the component
        MuiAppBar: {
          defaultProps: {
            // The props to change the default for.
            color:"white",
            
          },
        },
        MuiCard:{
          defaultProps:{
            
          },
          styleOverrides:{
            root:{
              boxShadow: "0 20px 25px rgba(0,0,0,6%)",
            }
          }
        },
        MuiButton:{
          styleOverrides:{
            root:{
              boxShadow:"none"
            }
          }
        },
        MuiPaper:{
          defaultProps:{
            elevation:0          },
          styleOverrides:{
            borderRadius:"0px"
          }
        },
        
      },
  });
  
  export default theme;
  