export default [
  {
    name: '!ping',
    description: 'Ping!',
    execute(message) {
      message.channel.send('Pong.');
    },
  },
  {
    name: '!ping2',
    description: 'Ping2!',
    execute(message) {
      message.channel.send('Pong2.');
    },
  },
];
