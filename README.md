<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>RabbitMQ Consumer and Producer Services</h1>

<p>This repository contains JavaScript files for RabbitMQ consumer and producer services.</p>

<h2>Prerequisites</h2>

<p>Before running the services, ensure you have the following prerequisites installed and set up:</p>

<ul>
  <li><strong>Erlang</strong>: RabbitMQ is implemented in Erlang, so you need to have Erlang installed on your machine. You can download and install Erlang from the <a href="https://www.erlang.org/downloads">official Erlang website</a>.</li>
  <li><strong>RabbitMQ</strong>: RabbitMQ is a message broker that stores and forwards messages between clients. Make sure RabbitMQ is installed and running on your machine or accessible via a network connection. You can download RabbitMQ from the <a href="https://www.rabbitmq.com/download.html">official RabbitMQ website</a> and follow the installation instructions for your operating system.</li>
</ul>

<h2>Installation</h2>
<p>1. Clone this repository to your local machine</p>
<p>2. Install dependencies  </p>
<pre><code>npm install
</code></pre>
<h2>Usage</h2>

<p>To run the RabbitMQ consumer service, use the following command:</p>

<pre><code>npm run consumer
</code></pre>

<p>This will start the consumer service, which listens for messages on the RabbitMQ server.</p>

<p>To run the RabbitMQ producer service, use the following command:</p>

<pre><code>npm run producer
</code></pre>

<p>This will start the producer service, which sends messages to the RabbitMQ server.</p>
</body>
</html>
