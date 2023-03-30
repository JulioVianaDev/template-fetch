// Diferença entre verbo HTTP 
// PUT VS PATCH
// PUT MODIFICA O OBJETO INTEIRO
// PATCH MODIFICA APENAS OS ATRIBUTOS que estão sendo enviados
// como nós estamos utilizando o mesmo formulário nós precisamos dizer
// que não estamos mais no input mode. para fazer isso criamos uma váriavel
// que vai checar se o texto escrito no botão é "Edite aqui!"
// no javascript nós podemos fazer perguntas lógicas e elas
// retornam uma booleana dizendo se a resposta é sim ou não
var editMode = document.getElementById("submit").innerHTML === "Edite aqui!";
// agora nós precisamos enviar os dados atuais para o input caso eu queira editar o item
function enviandoDadosAtuais(id,nameItem,emailItem){
  // preenchendo os inputs com os valores
  document.getElementById('email').value = emailItem;
  document.getElementById('name').value = nameItem;
  // colocando como meta dado no botao o data-id com o id
  document.getElementById("submit").setAttribute("data-id",id);
  // trocando o texto do botao
  document.getElementById("submit").innerHTML="Edite aqui!";
  // arrumando o editMode para true para poder sair do post e vir pro editData
  editMode = document.getElementById("submit").innerHTML === "Edite aqui!";
} 
// recebendo o id lá do form do post
async function editData(id){
  // criando as variaveis com os novos valores editados
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  // criando o json para enviar
  const data = {
    name: name,
    email: email,
  };
  // criando um response async
  response = await fetch(`${urlComId}${id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(res =>{
    // pegando os dados novos
    PegarDados();
    // removendo o id do botao depois de editar
    document.getElementById("submit").removeAttribute("data-id");
    // voltando o valor do email e do nome pra vazio
    document.getElementById('email').value = '';
    document.getElementById('name').value = ''; 
    // alterando o texto do botão para cadastrar!
    document.getElementById("submit").innerHTML = "Cadastrar!";
    // colocando a variavel editMode como false para poder agr o post funcionar
    editMode = document.getElementById("submit").innerHTML === "Edite aqui!";
  })
  .catch(error => console.error(error));
}