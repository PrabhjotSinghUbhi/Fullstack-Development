//! MAPS IN JAVASCRIPT.

/*
^   Maps in JavaScript are a fundamental data structure that allows you to store key-value pairs and efficiently retrieve, delete, and update these pairs. They are an essential tool in any developer's toolkit.
        *   const map = new Map() => creates a Map.
*/

/*
^   METHODS OF MAPS.
        *   map.set('name', 'John') => set a key to value

        *   map.get('name') => get the value of key map.

        *   map.delete('name') => deletes the pair.

        *   map.has('name') => checks weather name is present or not.

        *   map.size => gives the size.

        *   Array.from(map) => converts map into arr.
*/

/*
    ^ Iteration on the Maps.
*           map.forEach((value, key) => {
*                console.log(`${key}: ${value} `);
*           });

    ^ OR 

*       for (let [key, value] of map) {
*           console.log(`${key}: ${value}`);
*         }           
*/
// Higher Order Loops.
const arr = [2, 3, 4, 5, 1]

for (const num of arr) {
    // console.log(num);
}

// Maps
const mapMy = new Map;
mapMy.set("IND", "India")
mapMy.set("PB", "Panjab")
mapMy.set("GUJ", "GUJARAT")
// console.log(mapMy);

for (const [num, val] of mapMy) {
    // console.log(`${num} :-- ${val}`)
}

for (const key in myObject) {
    console.log(`${key} is for ${myObject[key]}`);
}

