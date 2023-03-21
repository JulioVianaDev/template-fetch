const url ="https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json"
// método 1
async function PegarDados(){
  const resultado = await fetch(url);
  const resultadoConvertido = await resultado.json();
  console.log(resultadoConvertido)
}
PegarDados();
// método 2 
async function PegarDados2(){
  const resultado2 = await fetch(url).then((res)=>res.json());
  console.log(resultado2);
}
PegarDados2();