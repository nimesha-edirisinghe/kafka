const { Kafka } = require("kafkajs");

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: "nimapp",
      brokers: ["nimeshapc:9092"],
      authenticationTimeout: 8000,
    });
    const producer = kafka.producer();
    console.log("Producer is connecting...");
    await producer.connect();
    console.log("Producer is connected!");
    //A-M, N-Z
    await producer.createTopics({
      topics: [
        {
          topic: "Producer",
          numPartitions: 2,
        },
      ],
    });
    console.log("Created Successfully!");
    await admin.disconnect();
  } catch (ex) {
    console.log(`Something bad happened ${ex}`);
  } finally {
    process.exit();
  }
}
