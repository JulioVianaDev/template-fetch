// PUT VS PATCH
// PUT MODIFICA O OBJETO INTEIRO
// PATCH MODIFICA APENAS OS ATRIBUTOS
function enviandoDadosAtuais(id,nameItem,emailItem){
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  document.getElementById('email').value = emailItem;
  document.getElementById('name').value = nameItem;
  console.log(nameItem);
  console.log(emailItem);
  console.log(id);
}
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