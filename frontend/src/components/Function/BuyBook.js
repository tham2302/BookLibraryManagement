import { getUserToken } from './Token';

export default function BuyBook(soLuong, sachId){
    const token = getUserToken();
    const data = {
        soLuong: soLuong,
        sachId: sachId
    };
    fetch('http://localhost:8080/giohang', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authentication": token
        },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(message => {
            alert(message);
        })
        .catch(error => {
            console.error(error);
        });
}