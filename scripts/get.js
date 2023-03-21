const url ="https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json"
// método 1
async function PegarDados(){
  const resultado = await fetch(url);
  const resultadoConvertido = await resultado.json();
  const array = Object.values(resultadoConvertido);
  
  const arr = Object.entries(resultadoConvertido).map(([id, values]) => ({ id, ...values }));

  console.log(arr);
  // console.log(array);
  // console.log(array[0].email);
}
PegarDados();
// método 2 
async function PegarDados2(){
  const resultado2 = await fetch(url).then((res)=>res.json());
  const arr = Object.entries(resultado2).map(([id, values]) => ({ id, ...values }));
  console.log(arr);
  // console.log(resultado2);
}
PegarDados2();