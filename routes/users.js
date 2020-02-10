const express = require('express');
const usersRouter = express.Router();

const users = [{
  id: 1,
  username: "pete"
}, {
  id: 2,
  username: "mike"
}, {
  id: 3,
  username: "rachel"
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

// Routing example
usersRouter.get('/about', (req, res, next) => {
 res.status(200).send('Request to About sent');
 console.log('Request to About sent')
});

// Another routing example
usersRouter.get('/:id/usernames/:username', (req, res, next) => {
  res.send(req.params.username)
});

usersRouter.post('/', (req, res, next) => {
  users.push(req.body.input)
  //console.log(req.body.input)
});

usersRouter.put('/', (req, res, next) => {
  let x;
  for (x=0; x < users.length; x++) {
    if (req.body.input.username.split(':')[0] === users[x].username) {
      users[x].username = req.body.input.username.split(':')[1]
      //console.log(users[x])
    } else {
      console.log('not found')
    }
  }
});

usersRouter.delete('/', (req, res, next) => {
  let x;
  for (x=0; x < users.length; x++) {
    if (req.body.input.username === users[x].username) {
      users.splice(x, 1)
      //console.log(users[x])
    } else {
      console.log('not found')
    }
  }
});



module.exports = usersRouter;

/*
Reference for experimentation:
const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};

// Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} Request Received`);
  next();
});

app.use('/beans/:beanName', (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    console.log('Response Sent');
    return res.status(404).send('Bean with that name does not exist');
  }
  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});

// Add your code below:
app.use(['/beans/', '/beans/:beanName'], (req, res, next) => {
  let bodyData = '';
req.on('data', (data) => {
  bodyData += data;
})
  req.on('end', () => {
    if (bodyData) {
  req.body = JSON.parse(bodyData);
}
    next();
  })
  
});



app.get('/beans/', (req, res, next) => {
  res.send(jellybeanBag);
  console.log('Response Sent');
});

app.post('/beans/', (req, res, next) => {
  

  
    const body = req.body;
    const beanName = body.name;
    if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
      return res.status(400).send('Bean with that name already exists!');
    }
    const numberOfBeans = Number(body.number) || 0;
    jellybeanBag[beanName] = {
      number: numberOfBeans
    };
    res.send(jellybeanBag[beanName]);
    console.log('Response Sent');
  
});

app.get('/beans/:beanName', (req, res, next) => {
  res.send(req.bean);
  console.log('Response Sent');
});

app.post('/beans/:beanName/add', (req, res, next) => {
  
  

  
    const numberOfBeans = Number(req.body.number) || 0;
    req.bean.number += numberOfBeans;
    res.send(req.bean);
    console.log('Response Sent');
 
});

app.post('/beans/:beanName/remove', (req, res, next) => {
  

  
    const numberOfBeans = Number(req.body.number) || 0;
    if (req.bean.number < numberOfBeans) {
      return res.status(400).send('Not enough beans in the jar to remove!');
    }
    req.bean.number -= numberOfBeans;
    res.send(req.bean);
    console.log('Response Sent');
  
});

app.delete('/beans/:beanName', (req, res, next) => {
  const beanName = req.params.beanName;
  if (!req.bean) {
    return res.status(404).send('Bean with that name does not exist');
  }
  req.bean = null;
  res.status(204).send();
  console.log('Response Sent');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
*/