const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message',  arg => {
    console.log("Event Called", arg);
});

emitter.emit('message', {id: 1, url: 'http://'});