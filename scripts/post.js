function sendData() {
  // quando essa função é chamada eu checo se eu estou no modo edit
  // esse modo edit só existe se eu tenho o arquivo update.js
  // então se é a primeira aula e não estou editando pode não fazer o if
  // porque eu estou postando não editando AINDA
  if(editMode){
    const id = document.getElementById("submit").getAttribute("data-id");
    editData(id);
    return
  }
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  const data = {
    name: name,
    email: email,
  };
  
  fetch('https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    PegarDados();
  })
  .catch(error => console.error(error));
}