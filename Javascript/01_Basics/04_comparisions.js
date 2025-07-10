// console.log(2 > 1);


console.log(null > 0)
console.log(null < 0)
console.log(null <= 0)
console.log(null >= 0)

/**
 **------THE REASON FOR ABOVE RESULT------------------
        -> IS OPERATORS SUCH AS <=, >=, <, > USE NUMERIC CONVERSION TO GIVE RESULT
            => E.G. null as we know is Number(null) gives us 0 so 0 < 0 or 0 > 0 give false result.

        -> BUT THE <= OR >= OPERATOR IN INTERPRETED AS !(NULL < 0) SO IT BECOMES !(FALSE) GIVES TRUE.

        -> AND ALSO == OR === CHECK/OPERATORS DOES NOT GO FOR NUMERIC CONVERSIONS AND DIRECTLY CHECK THEM
            => E.G.'NULL == 0' WILL GIVE 0 BECAUSE NULL IS ONLY EQUAL TO UNDEFINED, NOT TO ANY NUMBER.
 */

// DISCLAIMER - avoid comparing variables of different datatypes.

console.log("2" == 2)
// '===' will also check their datatypes.
console.log("2" === 2)

