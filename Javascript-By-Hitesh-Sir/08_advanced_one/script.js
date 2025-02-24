//! ABOUT API AND API REQUESTS

/*
^     What is api?
        *   API stands for Application Programming Interface
        *   , is a set of rules and protocols that allows different software applications to communicate and interact with each other.

^   What is XHR?
        *   XHR STANDS FOR 'XMLHttpRequest'.

        *   It is a JavaScript API that allows web pages to make asynchronous HTTP requests to a server

        * This enables web pages to update dynamically without having to reload the entire page, a key feature in modern web development.

        * It’s most commonly used for implementing AJAX (Asynchronous JavaScript and XML) techniques.
*/

/*
^   Stages of XHR requests:-
    *    0 → UNSENT: XMLHttpRequest object created, but .open() not called yet.
    *    1 → OPENED: .open() has been called.
    *    2 → HEADERS_RECEIVED: send() has been called, headers are available.
    *    3 → LOADING: The response is being downloaded.
    *    4 → DONE: The request is complete, and the response is ready.
*/

//& Specifying the api file.
const myUrl = 'https://api.github.com/users/PrabhjotSinghUbhi';

//& Making a Object of XHLHttpRequest
const xhr = new XMLHttpRequest();

//& Specifying the method of request and the address.
xhr.open('GET', myUrl, true);

//& This sets an event listener for the onreadystatechange event of an XMLHttpRequest (xhr).
//& The function inside it will execute every time the readyState of xhr changes.
xhr.onreadystatechange = function () {

    //? Check weather the state is 4 i.e. DONE before parsing.
    if (xhr.readyState === 4 && xhr.status === 200) {

        //? NOW try parsing.
        try {
            //& this.responseText contains the raw response from the server in text format.
            //& JSON.parse(this.responseText) converts it into a JavaScript object.
            //& If the response is empty or not valid JSON, an error will occur (Unexpected end of JSON input).
            let temp = JSON.parse(this.responseText)

            //& xhr.readyState represents the state of the request.
            console.log(xhr.readyState);

            //& After parsing the JSON, it tries to access the bio and name property from the object.
            console.log(temp.bio);
            console.log(temp.name);

        } catch (error) {
            console.log('COULD NOT PARSE THE JSON FILE: ', error)
        }

    }
}

//? Sends the JSON data with the request.
xhr.send();