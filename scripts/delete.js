const url = 'https://http-fetch-template-default-rtdb.firebaseio.com/pessoas/'
function deleteData(id) {
  
  fetch(`${url}${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: null
  })
  .then(console.log("deletou com sucesso"))
  .catch(error => console.error(error));
}