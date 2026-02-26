import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaUserGraduate, FaSun, FaMoon } from 'react-icons/fa';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Áp dụng dark mode cho toàn bộ app
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      {/* Navbar tự động dark/light theo theme */}
      <Navbar bg={darkMode ? 'dark' : 'primary'} variant={darkMode ? 'dark' : 'light'} expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
            <FaUserGraduate className="me-2" /> Quản Lý Sinh Viên
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="fw-semibold">Danh sách</Nav.Link>
              <Nav.Link as={Link} to="/add" className="fw-semibold">Thêm sinh viên</Nav.Link>
            </Nav>
            <Button
              variant={darkMode ? 'outline-light' : 'outline-light'}
              size="sm"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? 'Sáng' : 'Tối'}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className={`mt-5 ${darkMode ? 'text-light' : ''}`}>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<StudentForm />} />
          <Route path="/edit/:id" element={<StudentForm />} />
        </Routes>
      </Container>

      {/* Footer */}
      <footer className={`text-center py-3 mt-5 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
        <small>Dự án tuần 1 - Vu Tuan Anh  </small>
      </footer>
    </Router>
  );
}

export default App;