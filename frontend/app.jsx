import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import StudentsPage from "./pages/studentspage";
import GroupsPage from "./pages/groupspage";
import NotFound from "./pages/notfound";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
