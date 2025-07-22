import express, { response } from 'express'
const app = express()

const Jokes = {
    "jokes": [
        {
            "id": 1,
            "text": "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.'"
        },
        {
            "id": 2,
            "text": "I'm not lazy, I'm on energy-saving mode."
        },
        {
            "id": 3,
            "text": "Why do Java developers wear glasses? Because they don't C#."
        },
        {
            "id": 4,
            "text": "Parallel lines have so much in common… it’s a shame they’ll never meet."
        },
        {
            "id": 5,
            "text": "I'm reading a book on anti-gravity — it's impossible to put down!"
        },
        {
            "id": 6,
            "text": "Debugging: Removing the needles from the haystack."
        },
        {
            "id": 7,
            "text": "I would tell you a UDP joke, but you might not get it."
        },
        {
            "id": 8,
            "text": "The rotation of Earth really makes my day."
        },
        {
            "id": 9,
            "text": "I asked my dog what's two minus two. He said nothing."
        },
        {
            "id": 10,
            "text": "I used to play piano by ear, but now I use my hands."
        }
    ]
}

const PORT = 4000

app.get('/', (req, res) => {
    res.send(`<h1 className = "bg-black">hello this is the api for jokes use url => <a href='http://localhost:4000/jokes'>JOKES </a></h1>`)
})

app.get('/jokes', (req, res) => {
    res.json(Jokes)
})


app.listen(PORT, () => {
    console.log("this is starting at port", PORT);
})
