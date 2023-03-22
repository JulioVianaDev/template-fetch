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