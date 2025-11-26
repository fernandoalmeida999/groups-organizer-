import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from "./pages/home";
import studentspage from "./pages/studentspage";
import groupspage from "./pages/groupspage";
import notfound from "./pages/notfound";
import navbar from "./components/navbar";

function app() {
  return (
    <Router>
      <navbar />

      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/students" element={<studentspage />} />
        <Route path="/groups" element={<groupspage />} />
        <Route path="*" element={<notfound />} />
      </Routes>
    </Router>
  );
}

export default app;
