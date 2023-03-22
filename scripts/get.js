//a url significa o nome do banco de dados + o tipo de arquivo que quero editar
// neste exemplo cadastramos pessoas então depois do / colocamos pessoas.json
// se quisermos adicionar carros colocariamos carros.json
const url ="https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json"
// função que pega os dados da api
async function PegarDados(){
  // primeiro de tudo fazemos uma requisição para a api e esperamos a resposta
  const resultado = await fetch(url);
  // agora convertendo o resultado em json
  const resultadoConvertido = await resultado.json();
  // neste exemplo eu mostro que quanto coletar o json se lermos apenas os valores
  // que estão no objeto perdemos o id
  const array = Object.values(resultadoConvertido);
  // porem nós podemos fazer o seguinte, para todas as entradas de objeto,
  // pegamos o id e os valores e depois disso concatenamos no map para criar novos objetos
  const arr = Object.entries(resultadoConvertido).map(([id, values]) => ({ id, ...values }));
  // agora o que fazemos, nós criamos uma função que recebe um array
  // ai com este array ela vai criar os items e criar uma nova linha da tabela
  // porem repare que ela chama as funções do delete passando o id que ela vai precisar
  // e depois disso no enviando os dados atuais a função pede o id, name e email
  // em casos extras precisamos passar tudo que está no banco
  // e para finalizar damos um join para juntar
  function generateTableRows(arr) {
    return arr.map((item,index) => 
      `<tr>
        <td>${index}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.id}</td>
        <td><button onclick="deleteData('${item.id}')">Deletar</button></td>
        <td><button onclick="enviandoDadosAtuais('${item.id}','${item.name}', '${item.email}')">Editar</button></td>
      </tr>
    `).join('');
  }
  // aqui nós pegamos o elemento que está lá no html, que no caso é o body da tabela
  // que contem o id "tbody"
  const tableBody = document.getElementById("tbody");
  // agora ao nosso table body nós juntamos o HTML com o inerHTML 
  // chamando a função de gerar itens e depois enviando o array que criamos
  tableBody.innerHTML = generateTableRows(arr);
}
// pegando os dados quando nós iniciarmos o app
PegarDados();