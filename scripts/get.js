const url ="https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json"
// método 1
var allData= {}

async function PegarDados(){
  const resultado = await fetch(url);
  const resultadoConvertido = await resultado.json();
  // const array = Object.values(resultadoConvertido);
  
  const arr = Object.entries(resultadoConvertido).map(([id, values]) => ({ id, ...values }));

  // console.log(arr);
  allData= arr;
  // console.log(allData)
  // console.log(array);
  // console.log(array[0].email);
  // colocar os dados em tela
  function generateTableRows(arr) {
    console.log(arr)
    return arr.map(item => `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
      </tr>
    `).join('');
  }
  
  const tableBody = document.getElementById("tbody")
  console.log(tableBody)
  tableBody.innerHTML = generateTableRows(arr);
}
PegarDados();
// método 2 
console.log(allData);
async function PegarDados2(){
  const resultado2 = await fetch(url).then((res)=>res.json());
  const arr = Object.entries(resultado2).map(([id, values]) => ({ id, ...values }));
  
  // console.log(resultado2);
}
PegarDados2();
