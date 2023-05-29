import { TEMPLATE_ACTION_TYPES } from "./template.types";
import { createAction } from "../store.utils";


export const selectTemplate = (templateid) =>{
    return createAction(TEMPLATE_ACTION_TYPES.SELECT_TEMPLATE, templateid);
}