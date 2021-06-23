const url = "http://localhost:8080/"

function login() {

    doc

    fetch(`${url.url}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.player)
    })
        .then(response => response.json())
        .then()
        .catch(error => console.log(error));
}