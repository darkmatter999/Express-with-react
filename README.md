# Express-with-react
This project contains several Express backend features being used by a React app

For organizational reasons, the React app part is a subfolder of the Express backend. Hence this subfolder was not committed to git.

The workaround was as follows:

1. git init in the subfolder with the React app
2. create Github repo, add, commit and push
3. add the React app subfolder repo as submodule to the superfolder with the Express backend: 
git submodule add https://github.com/darkmatter999/express-with-react-app.git
