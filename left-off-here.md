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

2/16 - dont account for holidays and weekends in count.

2/16- change days left display to float. fixed size of cells, smaller fonts

2/18-delete functionality & re-increment days left. cannot pick up state change when hovering is done. Try again :) onHover=()=>{}
; worked on this some, the button rendering is faulty and delete button causes too many other problems!! 

3/1 -

whats left:
rework the delete button: upon clicking an event, editing comes up
allow for new user to register(user account flow, watch video)
user session processing
saved holidays need to be added to DB entries
side panel: merge this with options, allow for holidays/days off to be changed here. have a pop up when this first comes up to edit it
mobile/ipad/multimedia use looks good
sanitizing all data
styling
deploy server and front end
testing(?)
rendering is slow - worry about this after deployment


small things for user experience:
add for multiple cells(drag). clicking off box will delete it