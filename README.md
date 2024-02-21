# kafka-crash-course

## Prerequisite
- Knowledge
  - Node.JS
  - Experience with designing distributed systems
- Tools
  - Node.js: [Download Node.JS](https://nodejs.org/en)
  - Docker: [Download Docker](https://www.docker.com)
  - VsCode: [Download VSCode](https://code.visualstudio.com)

## Architecture : Apache Kafka
![](screenshots/apache_Kafka.png)


## Commands
- Start Zookeper Container and expose PORT `2181`.
```bash
docker run -p 2181:2181 zookeeper
```
- Start Kafka Container, expose PORT `9092` and setup ENV variables.
```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```
- Install Yarn - 
```bash
brew install yarn
```
OR
```bash
npm install -g yarn
```

- Initiate Yarn - 
```bash
yarn init
```

- Add kafkajs to Yarn - 
```bash
yarn add kafkajs
```

- Clone the repository
```bash
git clone https://github.com/adi-tsvet/kafka-crash-course.git
```

## Running Locally
- Run Multiple Consumers
```bash
node consumer.js <GROUP_NAME>
```
- Create Producer
```bash
node producer.js
> Rider1 south
> Rider2 north
```

## Output
![](screenshots/result.png)


## Authors

* **Adnan Ali** - Project Lead & Main Contributor

As a Master's degree holder in Computer Science from UMass Boston, I have utilized my expertise in machine learning and computer vision to spearhead the development of this integrated model system. 
With a keen eye for innovative solutions, I have orchestrated the seamless fusion of posture analysis and logo detection models, showcasing state-of-the-art techniques in the realm of AI.

Connect :
- [GitHub](https://github.com/adi-tsvet)
- [LinkedIn](https://www.linkedin.com/in/adi-tsvet/) 

## References
1. Video tutorial - https://www.youtube.com/watch?v=ZJJHm_bd9Zo

2. Github project - https://gist.github.com/piyushgarg-dev/32cadf6420c452b66a9a6d977ade0b01
