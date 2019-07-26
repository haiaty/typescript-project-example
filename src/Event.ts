

export class Event {

    eventId: string;

    aggregateId: string;

    constructor(aggregateId: string) {

        this.aggregateId = aggregateId;
        this.eventId = "aaaa"
    }
}