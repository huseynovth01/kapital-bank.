let form_group = document.querySelector(".form-group");
let phoneNumber = document.querySelector(".phoneNumber");
let countryCode = document.querySelector("#countryCode");
let form_control = document.querySelector(".form-control");
let sumbit = document.querySelector(".sumbit");

let appealsForm = document.querySelector("firstform");

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function submit (e){
    e.preventDefault();
    let form = this
    let FormDta = new FormDta(form)

    fetch(baseUrl, {

        method: "POST",
        body: FormData
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
form.addEventListener("sumbit",)



