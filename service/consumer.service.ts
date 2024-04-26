import Consumer from "../consumer/consumer";

const AMQP_URL = 'amqp://localhost';

async function runConsumerService() {
  const consumer = new Consumer(AMQP_URL);
  await consumer.setup();
  await consumer.consume();
}

runConsumerService().catch((error) => {
  console.error('Error running consumer service:', error);
});
