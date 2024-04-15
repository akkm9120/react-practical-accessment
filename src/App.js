import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import AddNewLecturerPage from "./pages/AddNewLecturerPage"

export default function App() {
  return (
    <Router>
      <div className="container">

        {/* Navbar */}
        <nav className="navbar navbar-expand-sm bg-light">

          <div className="container-fluid">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">All Customers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add New</Link>
              </li>
            </ul>
          </div>
        </nav>
        <LecturerContextData>
          <Routes>
            <Route path="/" element={<AddNewLecturerPage/>} />
            {/* <Route path="/add" element={} /> */}
          </Routes>
        </LecturerContextData>
      </div>
    </Router>
  )
}