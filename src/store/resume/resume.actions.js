import { RESUME_ACTION_TYPES } from "./resume.types";
import { createAction } from "./resume.utils";

export const setResumeSections = (sections,newItem) =>{
    const newSection ={...sections,...newItem}
    return createAction(RESUME_ACTION_TYPES.SET_SECTIONS, newSection);
}
export const setSelectedTemplate = (templateid) =>{
    return createAction(RESUME_ACTION_TYPES.SELECT_RESUME, templateid);
}