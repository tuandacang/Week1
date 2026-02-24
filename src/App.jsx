import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Quản lý Sinh viên (LocalStorage)</h1>
        <nav className="mb-4">
          <Link to="/" className="btn btn-primary me-2">Danh sách</Link>
          <Link to="/add" className="btn btn-success">Thêm sinh viên</Link>
        </nav>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<StudentForm />} />
          <Route path="/edit/:id" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;