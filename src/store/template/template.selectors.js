import { createSelector } from "reselect";

const selectTemplateRedudcer = (state) => state.template;

export const selectTemplate = createSelector([selectTemplateRedudcer],(template)=> template.templates.find(item=>item.id === template.selectedTemplate));

export const selectAllTemplates = createSelector([selectTemplateRedudcer],(template)=> template.templates);



