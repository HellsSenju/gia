import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import ContactsPage from "./pages/ContactPage.tsx";
import GroupsPage from "./pages/GroupsPage.tsx";
import AssignContactsToGroupsPage from "./pages/ContactsToGroupsPage.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/students" />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route
            path="/contactsGroups"
            element={<AssignContactsToGroupsPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
