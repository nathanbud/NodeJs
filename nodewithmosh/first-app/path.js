const path = require('path');


function showFilePath(){
    const pathObj = path.parse(__filename);

    console.log(pathObj);

}

module.exports = showFilePath;


