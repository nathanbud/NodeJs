const EventEmitter = require('events');
const emitter = new EventEmitter();

const Logger = require('./emitterClass');
const logger = new Logger();

logger.on('messageLogged', (arg) =>{
    console.log('Listener called', arg);
});

logger.log('message');
