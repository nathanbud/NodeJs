const EventLogOut = require('events');

class userLogOut extends EventLogOut{

    logout(){
console.log('hehehehe');
    }

} 
const user = new userLogOut();
user.logout();
