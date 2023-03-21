function getJSONData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const jsonData = document.getElementById('json-data');
      jsonData.innerText = JSON.stringify(data);
    })
    .catch(error => console.error(error));
}

getJSONData('https://http-fetch-template-default-rtdb.firebaseio.com/pessoas.json');