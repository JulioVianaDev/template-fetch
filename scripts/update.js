// PUT VS PATCH
// PUT MODIFICA O OBJETO INTEIRO
// PATCH MODIFICA APENAS OS ATRIBUTOS
var editMode = document.getElementById("submit").innerHTML !== "Edite aqui!";
function enviandoDadosAtuais(id,nameItem,emailItem){
  document.getElementById('email').value = emailItem;
  document.getElementById('name').value = nameItem;
  document.getElementById("submit").setAttribute("data-id",id);
  document.getElementById("submit").innerHTML="Edite aqui!";
  document.getElementById("submit").innerHTML = "Cadastrar!";
} 

async function editData(id){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const data = {
    name: name,
    email: email,
  };
  response = await fetch(`${urlComId}${id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(res =>{
    console.log("editou")
    // document.getElementById("submit").removeAttribute("data-id");
  })
  .catch(error => console.error(error));
}