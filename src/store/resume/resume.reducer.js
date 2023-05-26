
import { RESUME_ACTION_TYPES} from "./resume.types";
import { resumes } from "../../resumes";

const initialState = {
    selectedResume: null,
    templates: resumes,
    sections: {
      summary:"",
      personalInfo: null,
      experience: {
        index: 0,
        list: [],
      },
      education: {
        index: 0,
        list: [],
      },
  
      hobbies: ["Gaimg", "Travelling", "Music", "Farming"],
      skills: [],
      social: {
        facebook: { handle: "yourname@facebook" },
        twitter: { handle: "yourname@twitter" },
        youtube: { handle: "yourname@youtube" },
        linkedin: { handle: "yourname@linkedin" },
      },
    },
  };
  
const resumeReducer = (state=initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case RESUME_ACTION_TYPES.SET_SECTIONS:
        return { ...state, sections: payload };
      case RESUME_ACTION_TYPES.SELECT_RESUME:
        return { ...state, selectedResume: payload };
      default:
        return state
    }
  };


  export default resumeReducer;
  
  