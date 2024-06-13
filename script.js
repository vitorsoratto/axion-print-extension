var button = document.getElementsByName('btnPrint')[0];

button.addEventListener('click', function () {
  let object = [
    {
      name: 'ABEL ANTONIO DAL BO FILHOabc123',
      parcel: '1',
      value: '1123',
      due_date: '2014-10-10',
    },
  ];
  fetch('http://127.0.0.1:3000/print', {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Content-type': 'application/json',
    },
  });
});
