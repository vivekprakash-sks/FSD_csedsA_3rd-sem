const EventEmitter = require('events');
const myEmitter = new EventEmitter();
//.on() id the listener for the events
//.emit() id used to trigger  the events
myEmitter.on('greet', (name) => {
    console.log('hello, $ { name }!Welcome to Node js')
});
myEmitter.on('exit', () => {
    console.log("Application Closed. ");
});
//Emit the "Greet"  event
myEmitter.emit('greet', '2nd Year');
//Emit the "Exit"  event
myEmitter.emit('exit');