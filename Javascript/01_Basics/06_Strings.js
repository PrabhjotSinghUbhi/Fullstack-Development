// We are now going to talk about strings in Javascript.

// Adding variable in strings
let name = "Will Smith"

//"THE OLD-FASHIONED WAY".
console.log("Hello Everyone , My name is " + name + " and we should do yoga.");
//"MODERN WAY".
console.log(`${name} says keep my wife's name out of your f**king mouth`);


// In Strings we can access each letter of the string.

let str = new String("God is Omnipresent");
// let str = "God is Omnipresent";
console.log(str[4]);

/*
!    Some common Functions that are applicable in Stings are:
        ? 1. str.length().
        ? 2. str.toUpperCase().
        ? 3. str.toLowerCase().
        ? 4. str.charAt(__indexof_array__).
        ? 5. str.indexAt(__char__).
        ? 6. str.substring(start: , end: )-- > will create a addition array that would be a subset of the parent string.
        ? 7. str.slice(start: , end: )-- > does what it says.
        ? 8. str.trim()-- > will remove any extra or unnecessary spaces in the string.
        ? 9.str.replace("this string ", "that string")-- > replaces this string by that string.
        ? 10. str.split(' ')-- > converts a string into an array of strings.
*/

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(4));
console.log(str.indexOf("e"));
console.log(str.substring(7, 18));
//slice also accepts negative values.
console.log(str.slice(2, 18));

let inputName = "      prince    ramgharia  "
console.log(inputName);
console.log(inputName.trim())

inputName = inputName.replace("prince", "prabh")
console.log(inputName)