function sendData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  const data = {
    name: name,
    email: email
  };
  
  fetch('https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}