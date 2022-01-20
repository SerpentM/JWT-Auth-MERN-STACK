import "./App.css";
import Login from "./pages/login";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "https://prashant-nemesis-project.herokuapp.com/";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
