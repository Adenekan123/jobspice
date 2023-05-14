import { useReducer, createContext } from "react";
import { RESUME_ACTIONS } from "./resume.actions";

const initialState = {
  selectedResume: "casscade",
  resumes: [],
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

export const ResumeContext = createContext({
  currentResume: null,
  resumes: [],
  sections: {},
  updateSections: () => null,
});

const casscadeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case RESUME_ACTIONS.SET_SECTIONS:
      return { ...state, sections: payload };
    default:
      return;
  }
};

export const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(casscadeReducer, initialState);

  const { sections, selectedResume, resumes } = state;

  const updateSectionsReducer = (newSections) => {
    dispatch({ type: RESUME_ACTIONS.SET_SECTIONS, payload: newSections });
  };

  const updateSections = (payload) => {
    console.log(payload);
    const newSections = { ...sections, ...payload };
    updateSectionsReducer(newSections);
  };

  const value = {
    sections,
    selectedResume,
    resumes,
    updateSections,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
