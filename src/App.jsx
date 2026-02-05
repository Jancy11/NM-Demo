import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

import CoursesPage from "./pages/ListPage";
import StudentsPage from "./pages/AddPage";
import EnrollPage from "./pages/EditPage";
import SrcasPage from "./pages/SrcasPage";

function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "courses":
        return <CoursesPage />;
      case "srcas":
        return <SrcasPage />;
      case "students":
        return <StudentsPage />;
      case "enroll":
        return <EnrollPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar setPage={setPage} />
        {renderPage()}
      </div>
    </>
  );
}

export default App;
