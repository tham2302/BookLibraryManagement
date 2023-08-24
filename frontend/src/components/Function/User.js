import { saveUserToken } from "./Token";

function dangNhap(email, matKhau, myFunc) {
    const data = {
        email: email,
        matKhau: matKhau,
    };

    
    fetch('http://localhost:8080/nguoidung/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else if (response.status === 400) {
            throw new Error("Không tìm thấy tài khoản");
        }
        else if (response.status === 401) {
            throw new Error("Sai mật khẩu");
        }
    })
    .then(message => {
            saveUserToken(message.token);
            myFunc();
        })
        .catch(error => {
            alert(error);
        });
};

function dangKi(ten, email, matKhau, myFunc) {
    const data = {
        ten: ten,
        email: email,
        matKhau: matKhau,
    };

    fetch('http://localhost:8080/nguoidung/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Tài khoản đã tồn tại');
        })
        .then(data => {
            saveUserToken(data.token);
            myFunc();
        })
        .catch(error => {
            alert(error);
        });
};

export { dangNhap, dangKi }