import { Routes, Route } from "react-router-dom";


//routes
import Navigation from "./routes/navigation/navigation.route";
import Home from "./routes/home/home.route";
import Templates from "./routes/templates/templates.route";
import Profile from "./routes/profile/profile.route";
import Simple from "./resumes/simple/simple.component";
// import Casscade from "./resumes/casscade/casscade.component";
// import TemplateForm from "./components/template-form/template-form.component";

// import Resume from "./Resume/Resume";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/templates/*" element={<Templates />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/simple" element={<Simple />} />
      </Route>
    </Routes>
  );
}

export default App;
