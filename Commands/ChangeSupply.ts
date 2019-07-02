import {Event} from '../Event'

export class ChangeSupply {

    newSupply: number;

    aggregateId: string;

    constructor(aggregateId: string,  newSupply: number) {

        this.newSupply  = newSupply

        this.aggregateId = aggregateId;

    }

    generateEvent() {
        return new Event(this.aggregateId);
    }
}