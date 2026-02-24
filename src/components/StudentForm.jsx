import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

function StudentForm() {
    const { id } = useParams(); // nếu edit thì có id
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        ma_sv: '',
        ho_ten: '',
        ngay_sinh: '',
        lop: '',
        email: '',
    });

    const [error, setError] = useState('');

    // Nếu edit → load data từ localStorage
    useEffect(() => {
        if (id) {
            const stored = localStorage.getItem('students');
            if (stored) {
                const students = JSON.parse(stored);
                const student = students.find((s) => s.id === Number(id));
                if (student) {
                    setFormData(student);
                } else {
                    setError('Không tìm thấy sinh viên');
                }
            }
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.ma_sv || !formData.ho_ten || !formData.ngay_sinh || !formData.lop) {
            setError('Vui lòng điền đầy đủ các trường bắt buộc!');
            return;
        }

        let students = [];
        const stored = localStorage.getItem('students');
        if (stored) students = JSON.parse(stored);

        if (id) {
            // Edit
            students = students.map((s) =>
                s.id === Number(id) ? { ...formData, id: Number(id) } : s
            );
        } else {
            // Add new
            const newId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;
            students.push({ ...formData, id: newId });
        }

        localStorage.setItem('students', JSON.stringify(students));
        navigate('/');
    };

    return (
        <>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Mã sinh viên</Form.Label>
                    <Form.Control
                        name="ma_sv"
                        value={formData.ma_sv}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Họ tên</Form.Label>
                    <Form.Control
                        name="ho_ten"
                        value={formData.ho_ten}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Ngày sinh</Form.Label>
                    <Form.Control
                        type="date"
                        name="ngay_sinh"
                        value={formData.ngay_sinh}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lớp</Form.Label>
                    <Form.Control
                        name="lop"
                        value={formData.lop}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email (không bắt buộc)</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="success" type="submit" className="me-2">
                    {id ? 'Cập nhật' : 'Thêm mới'}
                </Button>
                <Button variant="secondary" onClick={() => navigate('/')}>
                    Quay lại
                </Button>
            </Form>
        </>
    );
}

export default StudentForm;