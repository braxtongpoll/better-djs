<h1 align="center">djs-better</h1>
<br></br>

## Usage
```js
const { Client } = require('discord.js');
const djs = require(`djs-better`);
const client = new Client();

// Method 1
client.utils = new djs(client);
// Method 2
const tools = new djs(client);
```

## Functions
* <utils>.getMention - Gets the first mention in a message object.
* <utils>.hasPerm - Checks if a member has a permission.
* <utils>.hasRole - Checks if a member has a role.
* <utils>.giveRole - Gives a member a role if they do not have it already.
* <utils>.takeRole - Takes a role from a member if they have it.
* <utils>.registerCommand - Registers a slash command.
* <utils>.deleteCommand - Deletes a slash command.
* <utils>.deleteAllCommands - Deletes all slash commands.
### Function Variables
* <utils>.getMention(message)
* <utils>.hasPerm(member, permission)
* <utils>.hasRole(member, role)
* <utils>.giveRole(member, role)
* <utils>.takeRole(member, role)
* <utils>.registerCommand(client, NAME OF COMMAND, DESCRIPTION OF COMMAND, COMMAND OPTIONS, options)
* <utils>.deleteCommand(client, NAME OF COMMAND, guild | option)
* <utils>.deleteAllCommands(client, guild | option)

## Dependencies 
* [Discord.js@13.1.0](https://npmjs.com/package/discord.js)

## Examples
To see examples go to [examples.js](https://github.com/braxtongpoll/better-djs/blob/main/src/examples.js)

## Contact 
* [Discord](https://plutothe.dev/discord)
* [Github](https://github.com/braxtongpoll)
* [Website](https://plutothe.dev/)

Read Me Made by [IceyyM8](https://iceyym8.dev)
