const {Kafka} = require("kafkajs");
exports.kafka = new Kafka({
    clientId: 'uber-test-app',
    brokers:["10.0.0.71:9092"],
});