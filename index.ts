
'use strict'


import { ChangeSupply }  from './Commands/ChangeSupply'


let input = process.argv[2];

let arr = []


arr.push(input)

console.log(input);

if(process.argv[3] == "1"){


    arr[0] = 1;
}

console.log(arr);

var newCommand =  new ChangeSupply(arr[0], 2.5);

var event = newCommand.generateEvent()

console.log(event.aggregateId);