// PUT VS PATCH
// PUT MODIFICA O OBJETO INTEIRO
// PATCH MODIFICA APENAS OS ATRIBUTOS

function editData(id,item){
  fetch(`${urlComId}${id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: item,
  })
  .then(res =>{
    
    console.log("editou com sucesso")
    PegarDados();
  })
  .catch(error => console.error(error));
}