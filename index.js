const { fetchMyIP, fetchCoordsByIp } = require('./iss');

/* My attempt
const print = function(ip) {
  if (!ip) {
    console.log('Error');
  } else {
    console.log(ip);
  }
};

fetchMyIP(print);
*/

/* Manual test
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
*/

/* Manual test
fetchCoordsByIp("99.232.127.158", (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coords);
});
*/