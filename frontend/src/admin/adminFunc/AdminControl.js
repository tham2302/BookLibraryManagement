import { getAdminToken, removeAdminToken, saveAdminToken } from "../../components/Function/Token";

function adminlogin(email, pass, myFunc) {
    const data = {
        email: email,
        matKhau: pass,
    };
    fetch('http://localhost:8080/quanly/login', {
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
            saveAdminToken(message.token);
            myFunc();
        })
        .catch(error => {
            alert(error);
        });
}

function adminlogout(myFunc) {
    removeAdminToken();
    myFunc();
}

function getAdminName(myFunc) {
    const token = getAdminToken();
    fetch('http://localhost:8080/quanly', {
        headers:{
            "Authentication": token
        }
    })
        .then(response => response.json())
        .then(data => {
            myFunc(data.ten);
        })
        .catch(error => {
            console.error(error);
        });
}

export { adminlogin, adminlogout, getAdminName };