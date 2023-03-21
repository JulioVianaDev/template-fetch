const urlDelete = 'https://http-fetch-template-default-rtdb.firebaseio.com/pessoas/'
function deleteData(id) {
  fetch(`${urlDelete}${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(console.log("deletou com sucesso"))
  .catch(error => console.error(error));
}