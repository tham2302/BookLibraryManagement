export default function GetBookById(id, myFunc) {
    fetch(`http://localhost:8080/sach/${id}`)
        .then(response => response.json())
        .then(data => {
            myFunc(data);
        })
        .catch(error => {
            console.error(error);
        });
}