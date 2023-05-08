import { Routes,Route } from "react-router-dom";
import TemplatesList from "../../components/templates-list/templates-list.component";
import TemplateForm from "../../components/template-form/template-form.component";


const Templates = () =>{
  
  return (
    <Routes>
      <Route index element={<TemplatesList/>} />
      <Route path=":form" element={<TemplateForm/>} />
    </Routes>
  )
}

export default Templates;