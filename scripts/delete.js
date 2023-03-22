// o endpoint do banco para deletar muda, o motivo disso é o id
// eu não posso apenas dizer pro banco "delete isso"
// sem explicar o que é isso
// eu preciso explicar o que ele vai deletar do banco
// e para isso nós usamos o id
const urlComId = 'https://http-fetch-template-default-rtdb.firebaseio.com/pessoas/'
function deleteData(id) {
  // para fazer a url ficar estática nós precisamos concatenar o id
  // passamos o método HTTP delete e explicamos que o formato é json
  // não precisamos passar nenhum corpo então o delete já está funcionando
  fetch(`${urlComId}${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res =>{
    console.log("deletou com sucesso")
    PegarDados();
  })
  .catch(error => console.error(error));
}