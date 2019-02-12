
const os = require('./os');
const log = require('./logger');


function sayHello(name){
    console.log("Hello", name);

    global.setTimeout(function(){

        console.log("HelloMae");
    }, 3000)
}

log("dfsdfsdsdvv");
os.osState();


sayHello("Mosh");