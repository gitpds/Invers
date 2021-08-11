"use strict";

var myHeaders = new Headers();
myHeaders.append("X-CloudBoxx-ApiKey", "5k0hxNLpkEqhPfql4v8MzNq86q+Xboy4NUalg7lJlerh0iFckIokq9PuZYuBu1Eb");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.cloudboxx.invers.com/api/devices/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

