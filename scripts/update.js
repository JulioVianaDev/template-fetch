// PUT VS PATCH
// PUT MODIFICA O OBJETO INTEIRO
// PATCH MODIFICA APENAS OS ATRIBUTOS
var editMode = document.getElementById("submit").innerHTML !== "Edite aqui!";
function enviandoDadosAtuais(id,nameItem,emailItem){
  document.getElementById('email').value = emailItem;
  document.getElementById('name').value = nameItem;
  document.getElementById("submit").setAttribute("data-id",id);
  document.getElementById("submit").innerHTML="Edite aqui!";

  console.log(editMode);
  if(editMode){
    // editData();
  }
  document.getElementById("submit").innerHTML = "Cadastrar!";
} 

async function editData(id,item){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  response = await fetch(`${urlComId}${id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      name: name,
      email: email
    },
  })
  .then(res =>{
    console.log("editou")
    // document.getElementById("submit").removeAttribute("data-id");
  })
  .catch(error => console.error(error));
}