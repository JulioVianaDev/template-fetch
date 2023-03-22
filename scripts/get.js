const url ="https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json"
// método 1
var position = 0;
async function PegarDados(){
  const resultado = await fetch(url);
  const resultadoConvertido = await resultado.json();
  const array = Object.values(resultadoConvertido);
  console.log("resultado convertido: ",resultadoConvertido)
  const arr = Object.entries(resultadoConvertido).map(([id, values]) => ({ id, ...values }));
  console.log("array 1:",arr);
  console.log("array 2:",array);
  // console.log(array[0].email);
  // colocar os dados em tela
  function generateTableRows(arr) {
    return arr.map((item,index) => 
      `<tr>
        <td>${index}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.id}</td>
        <td><button onclick="deleteData('${item.id}')">Deletar</button></td>
        <td><button onclick="editData('${item.id}','${item}')">Editar</button></td>
      </tr>
    `).join('');
  }
  
  const tableBody = document.getElementById("tbody")
  // connsultando tabela
  // console.log(tableBody)
  tableBody.innerHTML = generateTableRows(arr);
}

PegarDados();
// método 2 
async function PegarDados2(){
  const resultado2 = await fetch(url).then((res)=>res.json());
  const arr = Object.entries(resultado2).map(([id, values]) => ({ id, ...values }));
  
  // console.log(resultado2);
}
PegarDados2();
