// Diferença entre verbo HTTP 
// PUT VS PATCH
// PUT MODIFICA O OBJETO INTEIRO
// PATCH MODIFICA APENAS OS ATRIBUTOS que estão sendo enviados
// como nós estamos utilizando o mesmo formulário nós precisamos dizer
// que não estamos mais no input mode. para fazer isso criamos uma váriavel
// que vai checar se o texto escrito no botão é "Edite aqui!"
// no javascript nós podemos fazer perguntas lógicas e elas
// retornam uma booleana dizendo se a resposta é sim ou não
var editMode = document.getElementById("submit").innerHTML !== "Edite aqui!";
// agora nós precisamos enviar os dados atuais para o input caso eu queira editar o item
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
    console.log("editou");
    PegarDados();
    document.getElementById("submit").removeAttribute("data-id");
    document.getElementById('email').value = '';
    document.getElementById('name').value = ''; 
  })
  .catch(error => console.error(error));
}