"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = require("amqplib");
class Producer {
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
            console.log('Producer setup complete.');
        }
        catch (error) {
            console.error('Error setting up producer:', error);
        }
    }
    async produce() {
        try {
            setInterval(() => {
                const message = `Hello RabbitMQ! ${new Date()}`;
                this.channel.sendToQueue(this.queue, Buffer.from(message));
                console.log(`Sent: ${message}`);
            }, 1000);
        }
        catch (error) {
            console.error('Error producing message:', error);
        }
    }
    async close() {
        try {
            await this.channel.close();
            await this.connection.close();
            console.log('Producer connection closed.');
        }
        catch (error) {
            console.error('Error closing producer connection:', error);
        }
    }
}
exports.default = Producer;
//# sourceMappingURL=producer.js.map