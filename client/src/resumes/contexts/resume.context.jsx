import { useReducer, createContext } from "react";
import { RESUME_ACTIONS } from "./resume.actions";

const initialState = {
  selectedResume: null,
  resumes: [],
  sections: {
    summary:
      "I am a creative Front-end developer offering 3 years of experience providing high-impact web solutions for diverse industry organizations. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as a frontend web developer.",
    personalInfo: {
      fullname:"stephen colbert",
      country:"Nigeria",
      city:"Lagos",
      postal:"100009",
      email:"info@your.emailid.com",
      phone:"+234 7896 457",
      website: "www.yourdomain.com",
      profession:"Frontend Developer"
    },
    experience: {
      index:0,
      list:[
        {
          date: "2019 - 2020",
          employer: "Dangote Cement Nigeria",
          country:"",
          city:"",
          title: "Frontend Developer",
          story:["Developing and testing multiple web-based applications incorporating a range of technologies."],
          start_date:"",
          end_date:""
        }
      ],
    },
    education: [
        {
            date:"2010 - 2021",
            institution:"Texas University",
            course:"Web Designing",
            story:"Aspiring to combine broad background with strong technical skills to excel as a frontend web developer."
        },
        {
            date:"2000 - 2010",
            institution:"Texas Internation School",
            course:"High School",
            story:"Aspiring to combine broad background with strong technical skills to excel as a frontend web developer."
        },
    ],
    hobbies: ['Gaimg',"Travelling","Music","Farming"],
    skills: [
      {title:'html',level:80},
      {title:'css',level:70},
      {title:'sass',level:90},
      {title:'js',level:60},
      {title:'jquery',level:88},
    ],
    social: {
      facebook:{handle:"yourname@facebook"},
      twitter:{handle:"yourname@twitter"},
      youtube:{handle:"yourname@youtube"},
      linkedin:{handle:"yourname@linkedin"},
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
    console.log(payload)
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
