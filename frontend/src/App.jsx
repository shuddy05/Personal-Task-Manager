import React from "react";

import Navbar from "./components/Navbar";
import CoverPage from "./pages/CoverPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTask from "./pages/MyTask";
import EditTask from "./pages/EditTask";
import NewTask from "./pages/NewTask";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/my-task" element={<MyTask />} />
        <Route path="/new" element={<NewTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
