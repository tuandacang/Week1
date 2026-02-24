
## Thông tin chung
- **Công nghệ sử dụng**:
  - React (Vite)
  - React Router DOM (định tuyến trang)
  - Bootstrap + React Bootstrap 
  - localStorage (lưu trữ dữ liệu tạm thời)

- **Tính năng hiện tại**:
  - Xem danh sách sinh viên
  - Thêm sinh viên mới
  - Chỉnh sửa sinh viên
  - Xóa sinh viên
  - Validation cơ bản
  - Conditional & List rendering
  - useState, useEffect

## Tiến độ hàng ngày

### Ngày 1: Setup project và chạy được ứng dụng cơ bản
**Hoạt động chính**:
- Cài đặt Node.js, Git, VS Code
- Tạo project React bằng Vite: `npm create vite@latest . -- --template react`
- Cài dependencies cơ bản
- Chạy thành công `npm run dev` → hiển thị trang mặc định Vite + React tại http://localhost:5174

**Kết quả**:
- Project chạy ổn định
- Folder cấu trúc chuẩn: src/, public/, vite.config.js, package.json

### Thêm React Router và navigation cơ bản
**Hoạt động chính**:
- Cài thêm package: `npm install react-router-dom bootstrap react-bootstrap`
- Chỉnh sửa `src/App.jsx`: Thêm Router, Routes, Link để tạo navigation (Danh sách / Thêm mới)
- Thêm Bootstrap CSS (`import 'bootstrap/dist/css/bootstrap.min.css'`)
- Tạo cấu trúc giao diện cơ bản với tiêu đề và nút chuyển trang

**Kết quả**:
- Trang có tiêu đề "Quản lý Sinh viên (LocalStorage)"
- Có 2 nút: "Danh sách sinh viên" và "Thêm sinh viên "
- Chuyển trang không reload (sử dụng React Router)
- Giao diện bắt đầu đẹp hơn nhờ Bootstrap

