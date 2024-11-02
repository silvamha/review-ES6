export const buyFlightTicket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject("Sorry your payment was not successful");
      } else {
        resolve("Thank you, your payment was successful");
      }
    }, 3000);
  });
};

export const displayResult = () => {
  buyFlightTicket()
    .then((success) => console.log(success))
    .catch((error) => console.log(error));
};

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 *
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

export const userData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject(`Sorry we could not find someone with this name`);
      }else{

       resolve({firstName: 'Ed', lastName: 'Silver', age:55, citizenship: 'USA'}) 
      }
    }, 3000);
  });
};


export const displayUserDataResuts = () =>{
userData()
.then((data) =>console.log(data))
.catch((error) => console.log(error))
}