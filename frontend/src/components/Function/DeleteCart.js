import { getUserToken } from './Token';
export default function DeleteCart(id, myFunc) {
    const token = getUserToken();
    if (window.confirm("Bạn muốn hủy đơn hàng")) {
        fetch(`http://localhost:8080/giohang?donhangid=${id}`, {
            method: 'DELETE',
            headers: {
                "Authentication": token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                else if (response.status === 400) {
                    throw new Error("Lỗi thực thi" + response.text());
                }
            }
            )
            .then(message => {
                console.log("DeleteCart.js" + message);
                myFunc(id);
            })
            .catch(error => {
                console.log("DeleteCart.js" + error);
            });
    }
}
