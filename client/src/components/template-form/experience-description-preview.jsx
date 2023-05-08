import { Button } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

function ExperienceDescriptionPreview({
  nextStep,
  prevStep,
  updateSections,
  experience
}) {
  const [expList, setExpList] = useState([]);

  const { list,index } = experience

  const onNextClick = () => {
    nextStep();
  };

  const onDeleteClick = () => {
    const newList = list.filter((item,j)=> j !== index)
    if(!newList.length) prevStep(2);
    updateSections({ experience: { ...experience, list: newList } });
  };

  const onEditClick = (itemIndex) =>{
    updateSections({ experience: { ...experience, index: itemIndex } });
    prevStep();
  }

  const onMoreDescriptionClick = () =>{
        updateSections({ experience: { ...experience, index: experience['index'] + 1 } });
        prevStep(2)
  }

  useEffect(() => {
    setExpList(list);
  }, [list]);

  return (
    <Paper>
      <Box>
        {expList.map((item,itemIndex) => {
          const {
            title,
            employer,
            city,
            country,
            story,
            start_date,
            end_date,
          } = item;
          console.log(story);
          return (
            <Box key={title+end_date} sx={{border:"1px solid #eee",borderRadius:"5px",p:2}}>
              <Stack direction={"row"} justifyContent={"space-between"} sx={{borderBottom:"1px solid #eee"}}>
                <Typography variant="h6">
                  {title}, {employer} | <Typography variant="body1" component={"span"}> {city},{country} | {start_date} - {end_date}</Typography>
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
              <List
               onClick={()=> onEditClick(itemIndex)}
                sx={{
                  backgroundColor: "#eee",
                  maxHeight: "520px",
                  overflow: "hidden",
                  overflowY: "auto",
                }}
              >
                {story.length
                  ? story.map((description, index) => {
                      return (
                        <ListItemButton
                          key={description.substring(0, 2) + index}
                          divider
                        >
                          <ListItemText primary={description} />
                        </ListItemButton>
                      );
                    })
                  : ""}
              </List>
            </Box>
          );
        })}
        <Box sx={{textAlign:"center", mt:4}}>
          <Button variant="outlined" size="large" startIcon={<Add/>} onClick={onMoreDescriptionClick}> Add More Desctiption</Button>
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

export default ExperienceDescriptionPreview;
