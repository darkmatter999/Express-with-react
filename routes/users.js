const express = require('express');
const usersRouter = express.Router();

const users = [{
  id: 1,
  username: "samsepi0l"
}, {
  id: 2,
  username: "D0loresH4ze"
}, {
  id: 3,
  username: "Tyrell Wellick"
}
]

/* GET users listing. 
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
    username: "D0loresH4ze"
  }, {
    id: 3,
    username: "Mr. R0b"
  }
  ]);
});
*/

usersRouter.get('/', (req, res, next) => {
  res.send(users)
});

usersRouter.post('/', (req, res, next) => {
  users.push(req.body.input)
});

module.exports = usersRouter;