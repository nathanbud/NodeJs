const os = require('os');

function osState(){
    const  totalMemory = os.totalmem();
    const  freeMemory = os.freemem();
    
    console.log(`Total Memory: ${totalMemory}`);
    
    console.log(`Free Memory: ${freeMemory}`);

}



module.exports.osState = osState;  