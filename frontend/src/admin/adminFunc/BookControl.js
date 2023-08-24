function GetAllBook(myfunc) {
    fetch('http://localhost:8080/giohang/doanhthu')
        .then(response => response.json())
        .then(data => {
            myfunc(data);
        })
        .catch(error => {
            console.error(error);
        });
}
function GetBookById(sachId, myfunc) {
    fetch(`http://localhost:8080/sach/thongtinsach?sachId=${sachId}`)
        .then(response => response.json())
        .then(data => {
            myfunc(data);
        })
        .catch(error => {
            console.error(error);
        });
}
function AddBook(file, info) {
    if (window.confirm("Bạn muốn thêm sách")) {
        const SanPham = {
            id: 0,
            tenSach: info.tenSach,
            tacGia: info.tacGia,
            theLoai: info.theLoai,
            soTrang: info.soTrang,
            ngayPhatHanh: info.ngayPhatHanh,
            moTa: info.moTa
        };
        const formData = new FormData();
        formData.append('file', file);

        formData.append('diKem', JSON.stringify(SanPham));

        fetch('http://localhost:8080/sach', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(message => {
                document.getElementById('message').textContent = message;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
function EditBook(file, info) {
    if (window.confirm("Bạn muốn sửa sách")) {
        const SanPham = {
            id: info.sachId,
            tenSach: info.tenSach,
            tacGia: info.tacGia,
            theLoai: info.theLoai,
            soTrang: info.soTrang,
            ngayPhatHanh: info.ngayPhatHanh,
            moTa: info.moTa
        };
        const formData = new FormData();
        formData.append('file', file);

        formData.append('diKem', JSON.stringify(SanPham));

        fetch('http://localhost:8080/sach', {
            method: 'PUT',
            body: formData
        })
            .then(response => response.text())
            .then(message => {
                document.getElementById('message').textContent = message;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
function DeleteBook(sachId, myfunc) {
    if (window.confirm("Bạn muốn xóa sách")) {
        fetch(`http://localhost:8080/sach?sachId=${sachId}`, {
            method: "DELETE"
        })
            .then(response => response.text())
            .then(data => {
                myfunc(sachId);
                console.log("BookControl.js" + data);
            })
            .catch(error => {
                console.error(error);
            });
    }
}
export { GetAllBook, GetBookById, AddBook, EditBook, DeleteBook };



