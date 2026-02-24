// src/components/StudentList.jsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';

function StudentList() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    // Hàm load dữ liệu từ localStorage
    const loadStudents = () => {
        const stored = localStorage.getItem('students');
        if (stored) {
            setStudents(JSON.parse(stored));
        } else {
            setStudents([]);
        }
    };

    // Load khi component mount
    useEffect(() => {
        loadStudents();
    }, []);

    // Load lại khi tab/window focus (khi quay về từ trang khác)
    useEffect(() => {
        const handleFocus = () => {
            loadStudents();
        };
        window.addEventListener('focus', handleFocus);
        return () => {
            window.removeEventListener('focus', handleFocus);
        };
    }, []);

    // Hàm xóa sinh viên - FIX: lưu ngay vào localStorage sau khi xóa
    const handleDelete = (id) => {
        if (window.confirm('Xác nhận xóa sinh viên này?')) {
            // Lọc ra mảng mới
            const updatedStudents = students.filter((s) => s.id !== id);

            // Cập nhật state
            setStudents(updatedStudents);

            // Lưu NGAY LẬP TỨC vào localStorage (đảm bảo dữ liệu được lưu trước khi component re-render)
            localStorage.setItem('students', JSON.stringify(updatedStudents));

            // Optional: Load lại để chắc chắn (nếu có trường hợp state không đồng bộ)
            loadStudents();
        }
    };

    return (
        <>
            {students.length === 0 ? (
                <Alert variant="info">Chưa có sinh viên nào. Hãy thêm mới!</Alert>
            ) : (
                <Table striped bordered hover responsive>
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Mã SV</th>
                            <th>Họ tên</th>
                            <th>Ngày sinh</th>
                            <th>Lớp</th>
                            <th>Email</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.ma_sv}</td>
                                <td>{student.ho_ten}</td>
                                <td>{student.ngay_sinh}</td>
                                <td>{student.lop}</td>
                                <td>{student.email || '-'}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => navigate(`/edit/${student.id}`)}
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(student.id)}
                                    >
                                        Xóa
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
}

export default StudentList;