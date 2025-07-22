const express = require('express') // same as the import statement.
const app = express()
const port = 4000

app.get('/', (request, response) => {
    response.send('hello express this is the home port..')
})

const githubData = {
    "login": "PrabhjotSinghUbhi",
    "id": 170421080,
    "node_id": "U_kgDOCihrWA",
    "avatar_url": "https://avatars.githubusercontent.com/u/170421080?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/PrabhjotSinghUbhi",
    "html_url": "https://github.com/PrabhjotSinghUbhi",
    "followers_url": "https://api.github.com/users/PrabhjotSinghUbhi/followers",
    "following_url": "https://api.github.com/users/PrabhjotSinghUbhi/following{/other_user}",
    "gists_url": "https://api.github.com/users/PrabhjotSinghUbhi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/PrabhjotSinghUbhi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/PrabhjotSinghUbhi/subscriptions",
    "organizations_url": "https://api.github.com/users/PrabhjotSinghUbhi/orgs",
    "repos_url": "https://api.github.com/users/PrabhjotSinghUbhi/repos",
    "events_url": "https://api.github.com/users/PrabhjotSinghUbhi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/PrabhjotSinghUbhi/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Prabhjot Singh",
    "company": null,
    "blog": "",
    "location": "Ludhiana , Punjab",
    "email": null,
    "hireable": null,
    "bio": "First-year student at Chandigarh University, Punjab.\r\nAspiring software developer.\r\nOpen to learning work.\r\nI love to travel. ",
    "twitter_username": "prabh_018",
    "public_repos": 19,
    "public_gists": 0,
    "followers": 8,
    "following": 15,
    "created_at": "2024-05-21T10:59:24Z",
    "updated_at": "2025-07-12T12:36:53Z"
}

app.get('/t', (request, response) => {
    console.log('====================================');
    console.log("Hello user.");
    console.log('====================================');
    response.send("prabh.ubhi")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log("this is a server.. which is starting.");
})

