const EventEmitter = require('events'); // EventEmitter is a class
const emitter = new EventEmitter();



//event listner // register a listener
emitter.on('logged a message', (e)=> {
    
    console.log('Listener logged the message', e );

    }); 

//a event emitter //raise a event   // should be in logger so moved to logged
//emitter.emit('logged a message', {id: 4, url: 'http://'}) //event message and event data (id and url) emitted

// const log = require('./logger');
// log("hi"); // only hi is printed and emitter listener is not called as both the emitteres are different hence we nned to export the emitter in a class

const Logger = require('./logger');
const logger = new Logger();

logger.on('message logged', (e)=> {
    
    console.log('Listener logged the message', e );

    });
    
logger.logMessage('HI from logger class');