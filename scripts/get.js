const url ="https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json"
// método 1
async function PegarDados(){
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