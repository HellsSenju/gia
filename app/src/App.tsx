import 'bootstrap/dist/css/bootstrap.min.css';
import StudentPage from "./pages/StudentPage.tsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SubjectPage from "./pages/SubjectPage.tsx";
import {GradesPage} from "./pages/GradesPage.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Navigate to="/students" />} />
            <Route path="/students" element={<StudentPage />} />
            <Route path="/subjects" element={<SubjectPage />} />
            <Route path="/grades" element={<GradesPage />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
