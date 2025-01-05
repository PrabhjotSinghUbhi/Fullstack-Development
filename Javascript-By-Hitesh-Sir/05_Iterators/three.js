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

