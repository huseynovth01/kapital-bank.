
let firstform = document.querySelector("#firstform");

function submitt (e){
    e.preventDefault();
    let form = this
    let formData = new FormData(form)

    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",
        body: formData,
    }).then(response =>{response.json();})
    .then(data=>{
        console.log("Succes", data)
    })
    .catch(error =>  {

        console.log(error);
    })
}

  firstform.addEventListener('submit',submitt)