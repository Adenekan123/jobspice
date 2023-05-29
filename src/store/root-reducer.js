import {combineReducers} from 'redux';
import resumeReducer from './resume/resume.reducer';
import templateReducer from './template/template.reducer';

const rootReducer = combineReducers({
    resume:resumeReducer,
    template:templateReducer
});

export default rootReducer;