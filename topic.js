const { Kafka } = require("kafkajs");

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: "nimapp",
      brokers: ["nimeshapc:9092"],
      authenticationTimeout: 8000,
    });
    const admin = kafka.admin();
    console.log("Connecting...");
    await admin.connect();
    console.log("Connected!");
    //A-M, N-Z
    await admin.createTopics({
      topics: [
        {
          topic: "Users",
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
