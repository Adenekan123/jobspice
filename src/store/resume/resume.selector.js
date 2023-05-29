import { createSelector } from "reselect";

const selectResumeRedudcer = (state) => state.resume;

export const selectSections = createSelector([selectResumeRedudcer],(resume)=> resume.sections);

export const selectPersonalInfo = createSelector([selectSections],(sections)=>sections.personalInfo);
export const selectSummary = createSelector([selectSections],(sections)=>sections.summary);
export const selectExperience = createSelector([selectSections],(sections)=>sections.experience);
export const selectEducation = createSelector([selectSections],(sections)=>sections.education);
export const selectHobbies = createSelector([selectSections],(sections)=>sections.hobbies);
export const selectSkills = createSelector([selectSections],(sections)=>sections.skills);
export const selectSocial = createSelector([selectSections],(sections)=> sections.social);
