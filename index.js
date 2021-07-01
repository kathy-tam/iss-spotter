const { fetchMyIP } = require('./iss');

/*
const print = function(ip) {
  if (!ip) {
    console.log('Error');
  } else {
    console.log(ip);
  }
};

fetchMyIP(print);
*/

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});