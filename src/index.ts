
'use strict'


import { WantsToChangeSupply } from './Intentions/WantsToChangeSupply'


let aggregateId = 'TKN1'
let newSupply: number = 5000000;
var intention  = new WantsToChangeSupply(aggregateId, newSupply);


// verify intention

if(Cache.isPresent(intention.aggregateId)) {

}



