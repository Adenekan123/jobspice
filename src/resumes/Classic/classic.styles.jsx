import { blue, red } from '@mui/material/colors';
import {StyleSheet } from '@react-pdf/renderer';


export const styles = StyleSheet.create({
    page: {
      display:'flex',
      flexWrap:'nowrap'
    },
    aside: {
        flex:'0 0 25%',
        maxWidth:'25%',
        display:'block',
        backgroundColor:blue[500]
    },
    main: {
      flex:'0 0 75%',
      maxWidth:'75%',
      display:'block',
      backgroundColor:red[500]
    },
 
  });