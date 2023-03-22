// métodos diferentes de se formatar o fetch
async function PegarDadosComThen(){
  const resultado2 = await fetch(url).then((res)=>res.json());
  const arr = Object.entries(resultado2).map(([id, values]) => ({ id, ...values }));
}
async function PegarDadosComVariaveis(){
  const resultado = await fetch(url);
  const resultadoConvertido = await resultado.json();
  const arr = Object.entries(resultadoConvertido).map(([id, values]) => ({ id, ...values }));
}
PegarDadosComThen();
PegarDadosComVariaveis();
