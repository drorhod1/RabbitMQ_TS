"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consumer_1 = __importDefault(require("../consumer/consumer"));
const AMQP_URL = 'amqp://localhost';
async function runConsumerService() {
    const consumer = new consumer_1.default(AMQP_URL);
    await consumer.setup();
    await consumer.consume();
}
runConsumerService().catch((error) => {
    console.error('Error running consumer service:', error);
});
//# sourceMappingURL=consumer.service.js.map