function sendData() {
  // quando essa função é chamada eu checo se eu estou no modo edit
  // esse modo edit só existe se eu tenho o arquivo update.js
  // então se é a primeira aula e não estou editando pode não fazer o if
  // porque eu estou postando não editando AINDA
  if(!editMode){
    console.log("eita")
    const id = document.getElementById("submit").getAttribute("data-id");
    editData(id);
    return
  }
  // no javascript eu consigo pegar os dados do input, ou seja 
  // o que o usuario digitou lá no input, então pra isso
  // eu pego o input que tem o id "name" e o id email
  // e leio os value deles para salvar na variavel usando o .value
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  // para poder postar algo eu preciso criar um json para enviar
  // o formato fica assim:
  // {
  //   name: "algo que eu digitei",
  //   email: "algo que eu digitei",
  // }
  // então criei uma váriavel chamadata data e formatei o json com as váriaveis que fiz
  const data = {
    name: name,
    email: email,
  };
  // dando um fetch na url que quero salvar no meu banco de dados
  // nele eu falo que o metodo HTTP é post e o headers é do tipo json
  // e de body(corpo que enviarei) eu formato o data pra JSON e envio
  // o .then() vai formatar a resposta caso a requisição funcione, 
  // dizendo que o que o banco me enviou é 200(ok)
  // depois disso eu vou mostrar no console a resposta do servidor
  // e atualizar os dados chamando o get.js com a função pegar dados
  // o .catch só funciona quando a promisse falhar
  fetch('https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    PegarDados();
  })
  .catch(error => console.error(error));
}