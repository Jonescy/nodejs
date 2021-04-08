// publisher.js
// @ts-nocheck
const Redis = require("ioredis");

const redis = new Redis(process.env.redisURI.concat("/0"));

setInterval(() => {
    const message = { randomNum: Math.random() };
    // Publish to my-channel-1 or my-channel-2 randomly.
    const channel = `my-channel-${1 + Math.round(Math.random())}`;

    // Message can be either a string or a buffer
    redis.publish(channel, JSON.stringify(message));
    console.log("Published %s to %s", message, channel);
}, 1000);