const myForm = document.querySelector("form");
const search = document.querySelector("input");
const msg = document.querySelector("#msg");
const card = document.querySelector("#card");

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const locationId = search.value;
    msg.textContent = "Loading...";
    fetch(`https://finalspaceapi.com/api/v0/location/${locationId}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg.textContent = data.error;
            } else {
                msg.textContent = '';
                card.innerHTML = `
                    <div class="card">
                        <img src="${data.img_url}" class="card-img-top" alt="${data.name}">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">Type: ${data.type}</p>
                            <ul>
                                <li>Inhabitants #1:: ${data.inhabitants[0]}</li>
                                <li>Inhabitants #2:: ${data.inhabitants[1]}</li>
                            </ul>
                        </div>
                    </div>
                `;
            }
        })
    })
})







