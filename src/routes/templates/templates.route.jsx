import { Routes,Route } from "react-router-dom";
import TemplateForm from "../../components/template-form/template-form.component";
import Template from "../../components/template/template.component";
import ResumeTemplates  from "../../components/templates/templates.component";

const Templates = () =>{
  
  return (
    <Routes>
      <Route index element={<ResumeTemplates/>} />
      <Route path="/form" element={<TemplateForm/>} />
      <Route path="/view" element={<Template/>} />
    </Routes>
  )
}

export default Templates;