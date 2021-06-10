const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const eventOne = () => {   
    console.log('First Event');
}
const eventTwo = () => {   
    console.log('Second Event');
}
const eventThree = () => {   
    console.log('Third Event');
}

myEmitter.on('one', eventOne);
myEmitter.on('two', eventTwo);
myEmitter.on('three', eventThree);

myEmitter.emit('one');
myEmitter.emit('two');
myEmitter.emit('three');