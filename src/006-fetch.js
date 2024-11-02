/**
 * Fetch
 *
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

export const fetchData = () => {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/1")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, 5000);
};

/**
 * Fetch - Challenge
 *
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 *
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

export const getFirstComment = () => {
  setTimeout(() => {
    {
      fetch("https://jsonplaceholder.typicode.com/comments/1")
        .then((response) => response.json())
        .then((data) => console.log(`The first response is:`, data.postId));
    }
  }, 7000);
};

export const postComment = () => {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      body: JSON.stringify({
        postId: 1,
        firstName: "Joe",
        lastName: "Doe",
        email: "ed@gmail.com",
        city: "Atlanta",
        body: "test 1 2 3",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("The id# saved is: ", data));
  }, 8000);
};
