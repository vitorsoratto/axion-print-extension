var buttons = document.getElementsByName('btnPrint');

function getVals(id) {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({search: id})
  };

  return fetch('invoice_search.php', options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

buttons.forEach((b) => {
  b.addEventListener('click', function () {
    let id = this.getAttribute('data-id')
    getVals(id).then(res => {
      fetch('http://localhost:3000/print', {
        method: 'POST',
        body: JSON.stringify(res),
        headers: {
          'Content-type': 'application/json',
        },
      });
    });
    
  });
});


