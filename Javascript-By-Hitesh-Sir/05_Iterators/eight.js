const courses = [
    {
        item: "data science",
        price: 1000
    },
    {
        item: "Machine Learning",
        price: 4000
    },
    {
        item: "Computer science",
        price: 2000
    }
]

let priceToPay = courses.reduce((acc, items) => (items.price + acc), 0)
console.log(priceToPay)