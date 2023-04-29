import { Routes,Route } from "react-router-dom";

//routes
import Navigation from "./routes/navigation/navigation.route";
import Home from "./routes/home/home.route";
import Templates from "./routes/templates/templates.route";
import Profile from "./routes/profile/profile.route";

function App() {
  return (
  <Routes>
      <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path="/templates" element={<Templates/>} />
          <Route path="/profile" element={<Profile/>} />
      </Route>
  </Routes>
  );
}

export default App;
