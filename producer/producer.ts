import {Connection,Channel,connect } from 'amqplib';

class Producer {
  private connection: Connection | null ;
  private channel: Channel | null ;
  private readonly queue: string = 'hello';

  constructor(private readonly amqpUrl: string) {
    this.connection = null;
    this.channel = null;
  }

  async setup(): Promise<void> {
    try {
      this.connection = await connect(this.amqpUrl);
      this.channel = await this.connection.createChannel();

      await this.channel.assertQueue(this.queue, { durable: false });

      console.log('Producer setup complete.');
    } catch (error) {
      console.error('Error setting up producer:', error);
    }
  }

  async produce(): Promise<void> {
    try {
      setInterval(() => {
        const message = `Hello RabbitMQ! ${new Date()}`;
        this.channel.sendToQueue(this.queue, Buffer.from(message));
        console.log(`Sent: ${message}`);
      }, 1000);
    } catch (error) {
      console.error('Error producing message:', error);
    }
  }

  async close(): Promise<void> {
    try {
      await this.channel.close();
      await this.connection.close();

      console.log('Producer connection closed.');
    } catch (error) {
      console.error('Error closing producer connection:', error);
    }
  }
}

export default Producer;