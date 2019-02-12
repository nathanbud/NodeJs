const fs = require('fs');

function showFiles(){
//    Synchronous 
    // const files = fs.readdirSync('./');
    // console.log(files);

//  async

fs.readdir('./', function(err,files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

}


showFiles();

