import { Button } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

function EducationPreview({
  nextStep,
  prevStep,
  updateSections,
  education
}) {
  const [eduList, setEduList] = useState([]);

  const { list,index } = education

  const onNextClick = () => {
    nextStep();
  };

  const onDeleteClick = () => {
    const newList = list.filter((item,j)=> j !== index)
    if(!newList.length) prevStep(2);
    updateSections({ education: { ...education, list: newList } });
  };

  const onEditClick = (itemIndex) =>{
    updateSections({ education: { ...education, index: itemIndex } });
    prevStep();
  }

  const onMoreDegreeClick = () =>{
        updateSections({ education: { ...education, index: education['index'] + 1 } });
        prevStep(5)
  }

  useEffect(() => {
    setEduList(list);
  }, [list]);

  return (
    <Paper>
      <Box>
        {eduList.map((item,itemIndex) => {
          const {
            school,
            location,
            degree,
            field,
            start_date,
            end_date,
          } = item;
          return (
            <Box key={school+end_date} sx={{border:"1px solid #eee",borderRadius:"5px",p:2}}>
              <Stack direction={"row"} justifyContent={"space-between"} sx={{borderBottom:"1px solid #eee"}}>
                <Typography variant="h6">
                  {degree}, {start_date} - {end_date} | <Typography variant="body1" component={"span"}> {school} | {location} | {field}</Typography>
                </Typography>
                <Box>
                  <IconButton onClick={()=> onEditClick(itemIndex)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={onDeleteClick}>
                    <Delete />
                  </IconButton>
                </Box>
              </Stack>
            </Box>
          );
        })}
        <Box sx={{textAlign:"center", mt:4}}>
          <Button variant="outlined" size="large" startIcon={<Add/>} onClick={onMoreDegreeClick}> Add Another Degree</Button>
        </Box>
      </Box>
      <Stack
              direction={"row"}
              justifyContent={"end"}
              sx={{ mt: 4 }}
            >
              {/* <Button type="button" variant="contained" onClick={onPrevClick}>
                Prevoius
              </Button> */}
              <Button type="button" variant="contained" onClick={onNextClick}>
                Next
              </Button>
            </Stack>
    </Paper>
  );
}

export default EducationPreview;
