export default function GetAllBook(myFunc) {
    fetch('http://localhost:8080/sach')
        .then(response => response.json())
        .then(data => {
            myFunc(data);
        })
        .catch(error => {
            console.error(error);
        });
}