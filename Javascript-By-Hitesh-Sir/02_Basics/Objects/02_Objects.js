// Nested Objects.
let regular = {
    name: {
        fullName: {
            name1: "prabh",
            name2: "prince",
            name3: "jot"
        },
        lastName: {
            surname1: "Singh",
            surname2: "Ubhi",
            surname3: "Ramgharia"
        }
    }
}
console.log(regular.name.fullName.name1);

 




const Karan = {
    occupation:"Doctor"
}

console.log(Karan.occupation)

const {occupation} = Karan;
console.log(occupation)

const {occupation:job} = Karan;

console.log(job)

console.log(Karan)