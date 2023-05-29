import { resumes } from "../../resumes";
import { TEMPLATE_ACTION_TYPES } from "./template.types";

const initialState = {
  templates: resumes,
  selectedTemplate: null,
  color: null,
};

const templateReducer = (state = initialState, action) => {
    const {type,payload} = action;

    switch (type) {
        case TEMPLATE_ACTION_TYPES.SELECT_TEMPLATE:
        return { ...state, selectedTemplate: payload };
    
        default:
            return state;
    }
};

export default templateReducer;
