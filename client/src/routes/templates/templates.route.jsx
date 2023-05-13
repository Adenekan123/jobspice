import { Routes,Route } from "react-router-dom";
import TemplatesList from "../../components/templates-list/templates-list.component";
import TemplateForm from "../../components/template-form/template-form.component";
import Template from "../../components/template/template.component";

const Templates = () =>{
  
  return (
    <Routes>
      <Route index element={<TemplatesList/>} />
      <Route path="/form" element={<TemplateForm/>} />
      <Route path="/view" element={<Template/>} />
    </Routes>
  )
}

export default Templates;