import { getUserToken } from './Token';

export default function GetCart(myFunc) {
    const token = getUserToken();

    fetch('http://localhost:8080/giohang/cuatoi', {
        method: 'GET',
        headers: {
            "Authentication": token
        }
    })
        .then(response => response.json())
        .then(message => {
            myFunc(message);
        })
        .catch(error => {
            console.error(error);
        });
}