const Event = require('events');
const emitter = new Event();

emitter.on('logging', argEvent =>{
    console.log(`Hi ${argEvent.username}, with id number: ${argEvent.id}, your logged in`)
})

emitter.emit('logging', {username: "Gorge", id: 234})
