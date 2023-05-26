import { useState, useEffect, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import {
  selectSections,
  selectSummary,
} from "../../../store/resume/resume.selector";
import { setResumeSections } from "../../../store/resume/resume.actions";
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

  const handleChange = (content) => {
    setValue(content);
  };

  useEffect(() => {
    if (story) {
      setValue(story);
    }
  }, [story]);
  return (
    <Box>
      <ReactQuill
        ref={editorRef}
        theme="snow"
        value={value}
        placeholder="Briefly write about yourself."
        onChange={handleChange}
      />
    </Box>
  );
};

const suggestions = [
  "Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.",
  "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
  "Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level [Job Title] position. Ready to help team achieve company goals.",
  "Detail-oriented team player with strong organizational skills. Ability to handle multiple projects simultaneously with a high degree of accuracy.",
];

const Summary = ({
  nextStep,
  prevStep,

}) => {
  const dispatch = useDispatch();
  const sections = useSelector(selectSections);
  const summary = useSelector(selectSummary);
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

//   const getEditorList = () => {
//     const quillState = editorRef.current.getEditor().getContents();
//     const jobExperienceListItems = quillState.ops
//       .filter((op) => op.insert && op.insert !== "\n" && op.insert !== "")
//       .map((op) => op.insert.trim());

//     return jobExperienceListItems;
//     // updateSections({ experience: { ...experience, list: newList } });
//   };

  const onNextClick = () => {
    const editorContent = editorRef.current.getEditor().getContents()['ops'][0]['insert'];
    
    const newSummary = { summary: editorContent };
    dispatch(setResumeSections(sections,newSummary))
    nextStep();
  };

  const onPrevClick = () => {
    prevStep();
  };

  const addSuggestion = (suggestion) => {
    if(content.includes(suggestion)) return setContent(content.replace(suggestion,""));
    const editorContent = editorRef.current.getEditor().getContents().ops[0]['insert'];
    setContent(editorContent+suggestion);
  };

  useEffect(() => {
    if (summary) {
      setContent(summary);
    }
  }, [summary]);
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
                            backgroundColor: content.includes(suggestion)
                              ? red[800]
                              : "primary.main",
                            ":hover": { backgroundColor: red[800] },
                            display: "inline-block",
                            padding: "4px 8px",
                            borderRadius: "5px",
                          }}
                        >
                          {content.includes(suggestion) ? (
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
            Professional Summary
          </Typography>

          <TextEditor story={content} editorRef={editorRef} />
        </Grid>
      </Grid>
      <Stack direction={"row"} justifyContent={"space-between"} sx={{ mt: 4 }}>
        <Button type="button" variant="contained" onClick={onPrevClick}>
          Prevoius
        </Button>
        <Button type="button" variant="contained" onClick={onNextClick}>
          Done
        </Button>
      </Stack>
    </Paper>
  );
};

export default Summary;
