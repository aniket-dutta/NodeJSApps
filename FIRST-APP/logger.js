const EventEmitter = require("events");
const emitter = new EventEmitter();

class Logger extends EventEmitter{

    logMessage(message){
        console.log(message);
        //message logged now raising a event    
        this.emit('message logged',
            {id:1, url:'http://'}
        ); // listerner to this emitter in event.js will not work as both emitter objects are different // make a class 
    }

}

log = (message) => {
    console.log("in function",message);
    //message logged now raising a event    
    emitter.emit('message logged',
        {id:1, url:'http://'}
    ) // listerner to this emitter in event.js will not work as both emitter objects are different // make a class 
}
// logMe = (message)=>{
//     console.log(message);

// }

 
//module.exports = logMessage;
module.exports = Logger;
//module.exports.log = logMessage; // exports object 'log' which has he fucnion logmessage
//module.exports = logMe //exports just the fucntion logMe