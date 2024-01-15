let form_group = document.querySelector(".form-group");
let phoneNumber = document.querySelector(".phoneNumber");
let countryCode = document.querySelector("#countryCode");
let form_control = document.querySelector(".form-control");
let sumbit = document.querySelector(".sumbit");






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


//error message

let appealsForm = document.querySelector("firstform");

let name = document.querySelector(".namemessage");
let surname = document.querySelector(".surnamemessage");
let father = document.querySelector(".fathernamemessage");

document.querySelector("firstform").addEventListener("sumbit",function(e){
    e.preventDefault();

    if(formcontrol.value.trim()===""){
    
        namemessage.textContent = "Zehmet olmasa xanani bos saxlamayin"
        namemessage.style.color = "red"
        appealsForm.style.border = "1px solid red"
     
     }
     else{
        namemessage.textContent = ""
        namemessage.style.border = "1 px solid black"
         
     }

});