const { EventEmitter } = require('events');
class Button extends EventEmitter {}
const button = new Button();
button.on('click', () => console.log('button clicked!')); //()=> arrow function
button.on('mouseover', () => console.log('button is over the button.'));
button.emit('click');
button.emit('mouseover');

//for ruuning the node js we run (node filename) in terminal