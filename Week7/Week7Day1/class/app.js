const roboUsers = require('./getRobots');

roboUsers.getRobots()
    .then(res => console.log(res))
    .catch(e => console.log(e))