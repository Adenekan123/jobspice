import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ReactQuill from "react-quill";

import { Add, Done } from "@mui/icons-material";
import { red } from "@mui/material/colors";

const TextEditor = ({ story, editorRef }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (story) {
      let html = `<ul>
      ${story.map((item) => `<li>${item}</li>`).join("")}
     </ul>`;

      setValue(html);
    }
  }, [story]);
  return (
    <Box>
      <ReactQuill ref={editorRef} theme="snow" value={value} placeholder="List all description" />
    </Box>
  );
};

const suggestions = [
  "Skilled at working independently and collaboratively in a team environment.",
  "Developed strong organizational and communication skills through coursework and volunteer activities.",
  "Delivered services to customer locations within specific timeframes.",
  "Exercised leadership capabilities by successfully motivating and inspiring others.",
  "Self-motivated, with a strong sense of personal responsibility.",
  "Paid attention to detail while completing assignments.",
  "Cultivated interpersonal skills by building positive relationships with others.",
  "Gained strong leadership skills by managing projects from start to finish.",
  "Demonstrated strong organizational and time management skills while managing multiple projects.",
  "Gained strong leadership skills by managing projects from start to finish.",
  "Demonstrated strong organizational and time management skills while managing multiple projects.",
  "Identified issues, analyzed information and provided solutions to problems.",
  "Managed time efficiently in order to complete all tasks within deadlines.",
];

const ExperienceDescription = ({
  nextStep,
  prevStep,
  updateSections,
  experience,
}) => {
  const [descriptions, setDescriptions] = useState([]);
  // const [suggestions, setSuggections] = useState(default_suggestions);
  const editorRef = useRef(null);

  const { list, index } = experience;

  console.log(suggestions);
  const onNextClick = () => {
    const quillState = editorRef.current.getEditor().getContents();
    const jobExperienceListItems = quillState.ops
      .filter((op) => op.insert && op.insert !== "\n" && op.insert !== "")
      .map((op) => op.insert.trim());

    const newList = list.map((item, i) =>
      i === index ? { ...item, story: jobExperienceListItems } : item
    );

    updateSections({ experience: { ...experience, list: newList } });
    nextStep();
    console.log({newList})

  };

  const onPrevClick = () => {
    prevStep();
  };

  const addSuggestion = (suggestion) => {
    const added = descriptions.includes(suggestion);
    const newDescriptios = added
      ? descriptions.filter((description) => description !== suggestion)
      : [...descriptions, suggestion];
    setDescriptions(newDescriptios);
  };

  useEffect(() => {
    if (list.length && list[index]) {
      setDescriptions(list[index]["story"]);
    }
  }, [index, list, prevStep]);
  return (
    <Paper>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <List
            sx={{
              backgroundColor: "#eee",
              maxHeight: "520px",
              overflow: "hidden",
              overflowY: "auto",
            }}
          >
            {suggestions.length
              ? suggestions.map((suggestion, index) => {
                  return (
                    <ListItemButton
                      key={suggestion.substring(0, 5) + index}
                      divider
                      onClick={() => addSuggestion(suggestion)}
                    >
                      <ListItemIcon>
                        <Box
                          component={"span"}
                          sx={{
                            backgroundColor: descriptions.includes(suggestion)
                              ? red[800]
                              : "primary.main",
                            ":hover": { backgroundColor: red[800] },
                            display: "inline-block",
                            padding: "4px 8px",
                            borderRadius: "5px",
                          }}
                        >
                          {descriptions.includes(suggestion) ? (
                            <Done sx={{ color: "white.main" }} />
                          ) : (
                            <Add sx={{ color: "white.main" }} />
                          )}
                        </Box>
                      </ListItemIcon>
                      <ListItemText primary={suggestion} />
                    </ListItemButton>
                  );
                })
              : ""}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="primary" sx={{ mb: 3 }}>
            Nice! Now let's add the job description
          </Typography>
          {list.length && list[index] ? (
            <>
              {" "}
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {list[index]["employer"]} | {list[index]["title"]}
              </Typography>
              <Typography variant="body2" color={"gray"} sx={{ mb: 3, mt: 1 }}>
                {list[index]["city"]} : {list[index]["start_date"]} -{" "}
                {list[index]["end_date"]}
              </Typography>
            </>
          ) : (
            ""
          )}

            <TextEditor story={descriptions} editorRef={editorRef} />
        </Grid>
      </Grid>
      <Stack direction={"row"} justifyContent={"space-between"} sx={{ mt: 4 }}>
        <Button type="button" variant="contained" onClick={onPrevClick}>
          Prevoius
        </Button>
        <Button type="button" variant="contained" onClick={onNextClick}>
          Next
        </Button>
      </Stack>
    </Paper>
  );
};

export default ExperienceDescription;
