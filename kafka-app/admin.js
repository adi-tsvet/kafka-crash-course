const {kafka} = require('./client')

async function init(){
    const admin = kafka.admin();
    console.log("Admin connecting...")
    admin.connect();
    console.log("Admin connection success...");
    
    console.log('Creating Topic [rider-updates]');
    await admin.createTopics ({
        topics: [
            {
            topic: 'rider-updates',
            numPartitions: 2, //north-india  and south-india
            },
        ],
    });
    console.log('Topic created success [rider-updates]');
    
    console.log('Disconnecting admin...');
    await admin.disconnect();
}

init();