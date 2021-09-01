const { Client } = require('discord.js');
const djs = require(`djs-better`);
const client = new Client();
client.utils = new djs(client);

client.on("messageCreate", (message) => {

    let mention = client.utils.getMention(message); // Gets the first mention in a message object, returns a mention or undefined if no mention.

    let hasPerm = client.utils.hasPerm(message.member, "MANAGE_MESSAGES") // Checks if a member has a permission, returns a boolean.

    let hasRole = client.utils.hasRole(message.member, someGuildRole); // Checks if a member has a role, returns a boolean.

    client.utils.giveRole(message.member, someGuildRole); // Gives a member a role if they do not have it, returns undefined.

    client.utils.takeRole(message.member, someGuildRole); // Takes a role from a member if they do have it, returns undefined.

});

client.on("ready", (client) => {

    client.utils.registerCommand(client, module.exports.info.name, module.exports.info.description, module.exports.info.options, { guild: GUILD_ID_HERE });
    // The guild object should only be provided if you want the command registered to a specific guild. 

    client.utils.deleteCommand(client, NAME_OF_COMMAND, guild);
    // The guild variable should only be provided if you want the command deleted from a specific guild. // This is good for testing purposes not a live environment.

    client.utils.deleteAllCommand(client, guild);
    // The guild variable should only be provided if you want to delete all commands from a specific guild. // This is good for testing purposes not a live environment.

});

// This is an example of a command.
module.exports.testCommand = async(interaction) => {
    interaction.reply({ content: "Command tested! " + interaction.options.get("input").channel.name, ephemeral: true });
}
module.exports.info = {
    name: "test",
    description: `This is simply a testing command.`,
    options: [{
        name: 'input',
        type: 'CHANNEL',
        description: 'The channel to provide.',
        required: true
    }]
}