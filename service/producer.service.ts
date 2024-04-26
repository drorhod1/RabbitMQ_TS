import Producer from '../producer/producer';

const AMQP_URL = 'amqp://localhost';

async function runProducerService() {
  const producer = new Producer(AMQP_URL);
  await producer.setup();
  await producer.produce();
}

runProducerService().catch((error) => {
  console.error('Error running producer service:', error);
});
