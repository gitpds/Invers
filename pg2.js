"use strict";
/*
var myHeaders = new Headers();
myHeaders.append("X-CloudBoxx-ApiKey", "5k0hxNLpkEqhPfql4v8MzNq86q+Xboy4NUalg7lJlerh0iFckIokq9PuZYuBu1Eb");

//

// fetch("https://api.cloudboxx.invers.com/api/devices/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


//Admin types in license plate
//Endpoint:

//License Plate searches database
//Link autopopulates company
//Choose State

//License Plates need to be entered or somehow associated with the internal database
//I'm sure we can add license plates later
//FIXME
//See if the LP exists for the install we've done.

//

//Search returns QNR

let lp =;
const findLP = function (SEARCHINPUT){
    let lp = search return;
    return qnr.endpoint
}

console.log(findLP(userinput)


const findStatus = function(qnr) {
    return allStatus.qnr
    if lockStatus = True &&& immobilized = True {
        return `Locked`
    } else if {
        return `Out of Sync`
    }
}
//QNR is used to check status
//If status returns okay, proceed
//If status returns out of sync, correct and put insync
//Return the details of the search with the status report
//If car is locked admin had option to unlock
//If car is unlocked admin has option to lock
//return status to confirm that previous status has been updated


*/




var myHeaders = new Headers();
myHeaders.append("X-CloudBoxx-ApiKey", "5k0hxNLpkEqhPfql4v8MzNq86q+Xboy4NUalg7lJlerh0iFckIokq9PuZYuBu1Eb");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.cloudboxx.invers.com/api/devices/494DA49B995A2D02/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



  //Settings Parity with Mac