
'use strict'


import { ChangeSupply }  from './Commands/ChangeSupply'


let input = process.argv[2];


var newCommand =  new ChangeSupply(input, 2.5);

var event = newCommand.generateEvent()

console.log(event.aggregateId);