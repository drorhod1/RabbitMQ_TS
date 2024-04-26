import {Connection , Channel ,connect} from 'amqplib';

class Consumer {
  private connection: Connection;
  private channel: Channel;
  private readonly queue: string = 'hello';

  constructor(private readonly amqpUrl: string) {}

  async setup(): Promise<void> {
    try {
      this.connection = await connect(this.amqpUrl);
      this.channel = await this.connection.createChannel();

      await this.channel.assertQueue(this.queue, { durable: false });

      console.log('Consumer setup complete.');
    } catch (error) {
      console.error('Error setting up consumer:', error);
    }
  }

  async consume(): Promise<void> {
    try {
      console.log('Waiting for messages...');

      this.channel.consume(this.queue, (msg) => {
        if (msg !== null) {
          console.log(`Received: ${msg.content.toString()}`);
          this.channel.ack(msg);
        }
      });
    } catch (error) {
      console.error('Error consuming message:', error);
    }
  }

  async close(): Promise<void> {
    try {
      await this.channel.close();
      await this.connection.close();

      console.log('Consumer connection closed.');
    } catch (error) {
      console.error('Error closing consumer connection:', error);
    }
  }
}

export default Consumer;