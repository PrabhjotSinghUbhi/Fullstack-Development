//! MERGING NESTED OBJECTS.
/*
^   1. TWO METHODS:
*       -> using 'Object.assign({}, source1, source2)'
*       -> using spread operator (...)
*/

const obj1 = {
    name: 'prabhjot',
    surname: 'singh'
}
console.log(obj1);

const obj2 = {
    occupation: 'SDE',
    hobby: 'reading books'
}
console.log(obj2);

//& Using Object.assign()
const adding = Object.assign({}, obj1, obj2)
console.table(adding);

//& Using ( ... ) spread operator.
const adding2 = { ...obj1, ...obj2 }
console.log('====================================');
console.table(adding2);
console.log('====================================');