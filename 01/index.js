import express from 'express'
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

const githubData = {
    "login": "focusedCoderr",
    "id": 26301299,
    "node_id": "MDQ6VXNlcjI2MzAxMjk5",
    "avatar_url": "https://avatars.githubusercontent.com/u/26301299?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/focusedCoderr",
    "html_url": "https://github.com/focusedCoderr",
    "followers_url": "https://api.github.com/users/focusedCoderr/followers",
    "following_url": "https://api.github.com/users/focusedCoderr/following{/other_user}",
    "gists_url": "https://api.github.com/users/focusedCoderr/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/focusedCoderr/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/focusedCoderr/subscriptions",
    "organizations_url": "https://api.github.com/users/focusedCoderr/orgs",
    "repos_url": "https://api.github.com/users/focusedCoderr/repos",
    "events_url": "https://api.github.com/users/focusedCoderr/events{/privacy}",
    "received_events_url": "https://api.github.com/users/focusedCoderr/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Gaurav Yadav",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2017-03-09T11:49:22Z",
    "updated_at": "2025-03-25T17:49:13Z"
  };

app.get("/", (req, res)=>{
    
    res.send('<h1>Very Good: You are on home route</h1>');
})

app.get("/github", (req, res)=>{
    res.json(githubData);
})

app.listen(port, ()=>{
    console.log(`The server has started and is listening on ${port}`);
})
