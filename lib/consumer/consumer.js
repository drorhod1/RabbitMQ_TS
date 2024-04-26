"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = require("amqplib");
class Consumer {
    amqpUrl;
    connection;
    channel;
    queue = 'hello';
    constructor(amqpUrl) {
        this.amqpUrl = amqpUrl;
    }
    async setup() {
        try {
            this.connection = await (0, amqplib_1.connect)(this.amqpUrl);
            this.channel = await this.connection.createChannel();
            await this.channel.assertQueue(this.queue, { durable: false });
            console.log('Consumer setup complete.');
        }
        catch (error) {
            console.error('Error setting up consumer:', error);
        }
    }
    async consume() {
        try {
            console.log('Waiting for messages...');
            this.channel.consume(this.queue, (msg) => {
                if (msg !== null) {
                    console.log(`Received: ${msg.content.toString()}`);
                    this.channel.ack(msg);
                }
            });
        }
        catch (error) {
            console.error('Error consuming message:', error);
        }
    }
    async close() {
        try {
            await this.channel.close();
            await this.connection.close();
            console.log('Consumer connection closed.');
        }
        catch (error) {
            console.error('Error closing consumer connection:', error);
        }
    }
}
exports.default = Consumer;
//# sourceMappingURL=consumer.js.map