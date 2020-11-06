import Discord from 'discord.js';
import Ping from './commands/ping.js';
import Role from './commands/shoutouts.js';

const client = new Discord.Client();
client.commands = new Discord.Collection();
// client.commands.set('ping', Ping);

Ping.map((command) => client.commands.set(command.name, command));

Role.map((command) => client.commands.set(command.name, command));

client.once('ready', () => {
  console.log('Ready!');
});

// Greeting Message
client.on('guildMemberAdd', (member) => {
  member.send('Welcome to the ARES Discord server, please contact <@197606890606297088>, <@192876060541583360>, <@367984124625027072>, <@254041210212057088>, or <@278033589721890816> =] to get access');
});

// Commands
client.on('message', (message) => {
  const args = message.content.slice().trim().split(/ +/);
  const command = args[0];

  const theCommand = client.commands.get(command);
  if (theCommand) {
    theCommand.execute(message, args);
  }
});

client.login('NzY5ODA5MjM3OTQ5NTQ2NTI2.X5UauA.yL-EI8ESENBcPmxYQAk4nnxgFSs');
