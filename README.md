# Breweries

This is my Express.js application which can authenticate via JWT and gets lists of breweries, filtered if needed.
For logging all requests, I used morgan.

To start, please:
- install all packages with "npm i"
- run "npm start"


For getting a valid token on POST /login, please send this in the body:

{
	"username": "NewUser",
	
	"password": "NewPassword"
}


For getting the list of breweries on GET /breweries:
- provide a valid token after "Bearer "


For searching:
- please provide the word on the dotted area: GET /breweries?query=...


For running unit and integration tests, please run "npm test".
