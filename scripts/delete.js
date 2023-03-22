// o endpoint do banco para deletar muda, o motivo disso é o id
// eu não posso apenas dizer pro banco "delete isso"
// sem explicar o que é isso
// eu preciso explicar o que ele vai deletar do banco
// e para isso nós usamos o id
const urlComId = 'https://http-fetch-template-default-rtdb.firebaseio.com/pessoas/'
function deleteData(id) {
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