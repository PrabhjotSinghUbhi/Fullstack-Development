/* Primitives-7-types:
    1. String
    2. Number
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt
    */
    let name = "Prabhjot Singh";
    let num = 5;
    let inLoggedIn = false;
    let humptyDumpty = null;
    let x = Symbol("123");
    let y = Symbol("123");
    
    //Will tell about the specialty of symbols.  Will learn further in React.js library.
    console.log(x === y);
    
    let speedOfLight = 299792458n; // trialing n will convert into BigInt.
    console.log("To large variables can be stored in "+typeof speedOfLight);
    
    /*JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime, rather than at compile time. You don't need to specify the type of a variable when you declare it, and a variable can hold values of different types at different points in time. */
    
    /* Non-Primitive:
        1. Array
        2. Object
        3. Functions
        4. Reference
    */
    
    const arr = [2, 3, 6, 7, 4];
    const obj = {
      brand: "Titan", //   Property : value
      model: "X3",
      like: true,
    };
    
    // Null is a Object.
    console.log("Null is " + typeof humptyDumpty);
    