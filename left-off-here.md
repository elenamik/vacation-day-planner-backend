WHERE I LEFT OFF:

1/22
addUsers.js sending fetch, userController sending response, but front end is recieving a null body :(
-- turned out to be a CORS issue, bc reponse was opaque. added cors to express api and did app.use()


1/24
getUsers.js: recieves response body, but cannot figure out what to do with response/json or how to access this to add it to state

1/27
post request works through URL but not axios
does not even seem to be recieved, as per console
post request gets a 404 - url is not found?

2/3 - get events to load up from mongodb

2/10 - !! Fuck yeah got so much accomplished !!
status: updates save to DB!! now I need to load those into the UI upon log in of the user. Right now, the two are not connected.
So when a user signs in, their respective events are loaded up !!
So proud of this, actually accomplished so much this weekend

2/11 data cannot be rendered from mongodb because it gets saved in different formats(?) - saving in mongo and saving in ui(?)