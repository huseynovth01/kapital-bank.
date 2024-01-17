// let form_group = document.querySelector(".form-group");
// let phoneNumber = document.querySelector(".phoneNumber");
// let countryCode = document.querySelector("#countryCode");
// let form_control = document.querySelector(".form-control");
let sumbit = document.querySelector(".sumbit");

// let appealsForm = document.querySelector("firstform");

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

let firstform = document.querySelector("#firstform");

function submitt (e){
    e.preventDefault();
    let form = this
    let FormDta = new FormDta(form)

    fetch(baseUrl, {

        method: "POST",
        body: FormData,
        headers: {
        contentType: "application/json"
        }
    }).then(response =>{
        if (response.ok) {
            return response.json();
        }
        else{
            form.innerHTML = "Error: "
        }
    })
    .catch(error =>  {

        console.log(error);
    })
}
firstform.addEventListener("sumbit",submitt)




// const baseUrl = "https://jsonplaceholder.typicode.com/posts";

async function submitForm(e) {
    e.preventDefault();
    let form = e.target; 
    let formData = new FormData(form); 

    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            body: formData, 
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            form.innerHTML = "Error: " + response.status;
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// firstform.addEventListener("submit", submitForm);
