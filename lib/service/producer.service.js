"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const producer_1 = __importDefault(require("../producer/producer"));
const AMQP_URL = 'amqp://localhost';
async function runProducerService() {
    const producer = new producer_1.default(AMQP_URL);
    await producer.setup();
    await producer.produce();
}
runProducerService().catch((error) => {
    console.error('Error running producer service:', error);
});
//# sourceMappingURL=producer.service.js.map