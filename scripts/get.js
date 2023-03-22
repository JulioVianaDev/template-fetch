//a url significa o nome do banco de dados + o tipo de arquivo que quero editar
// neste exemplo cadastramos pessoas então depois do / colocamos pessoas.json
// se quisermos adicionar carros colocariamos carros.json
const url ="https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json"
// função que pega os dados da api
async function PegarDados(){
  // primeiro de tudo fazemos uma requisição para a api e esperamos a resposta
  const resultado = await fetch(url);
  const resultadoConvertido = await resultado.json();
  const array = Object.values(resultadoConvertido);
  const arr = Object.entries(resultadoConvertido).map(([id, values]) => ({ id, ...values }));
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
  
  const tableBody = document.getElementById("tbody")
  tableBody.innerHTML = generateTableRows(arr);
}

PegarDados();