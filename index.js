const discord_permission = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS", "NONE"];
const util = require("./src/functions");
class betterDJS {
    constructor(client) {
        this.client = client;
    };

    async getMention(message) {
        if (message.mentions.members.first()) {
            return message.mentions.members.first();
        } else if (message.mentions.channels.first()) {
            return message.mentions.channels.first();
        } else if (message.mentions.roles.first()) {
            return message.mentions.roles.first();
        };
    };

    async hasPerm(member, permission) {
        if (!discord_permission.includes(permission)) {
            new Error(`Invalid Permission Type: ${permission}`);
            return undefined;
        };
        if (member.permissions.has(permission)) return true;
    };

    async hasRole(member, role) {
        if (member.roles.cache.has(role)) return true;
    };

    async giveRole(member, role) {
        if (!member.roles.cache.has(role)) member.roles.add(role).catch(e => { console.error(e); });
    };

    async takeRole(member, role) {
        if (member.roles.cache.has(role)) member.roles.remove(role).catch(e => { console.error(e); });
    };

    //options guild: guild ID
    async registerCommand(client, name, description, commandOptions, options) {
        if (typeof name !== String) return new Error(`Invalid Command Name Variable Type: ${name} | Names must be a string.`);
        if (typeof description !== String) return new Error(`Invalid Command Description Variable Type: ${description} | Description must be a string.`);
        if (typeof commandOptions !== Array) return new Error(`Invalid Command Options Variable Type | commandOptions must be an array.`);
        if (commandOptions.length > 25) return new Error(`Invalid commandOptions length. You may only provide up to 25 options per command.`);
        let validOptions = true;
        for (let option of commandOptions) {
            let check = util.optionCheck(option);
            if (check == false) validOptions = false;
        };
        if (validOptions == false) return new Error("Invalid Command Option. See the documentation on how to properly provide options.");
        if (options.guild) {
            let guild = await client.guilds.cache.get(options.guild);
            if (!guild) return new Error(`Invalid Guild to assign command: ${options.guild} | Please make sure you have provided a correct guild ID that your application has access to.`);
            guild.commands.create({
                name: name,
                description: description,
                options: commandOptions
            }).catch(e => console.error(e));
        } else {
            if (!client.application.owner) await client.application.fetch();
            client.application.commands.create({
                name: name,
                description: description,
                options: commandOptions
            }).catch(e => console.error(e));
        };
    };

    // Guild option
    async deleteCommand(client, name, guild) {
        if (guild) {
            let guild = await client.guilds.cache.get(guild);
            if (!guild) return new Error("Invalid Guild.");
            guild.commands.fetch().then(commands => {
                for (let command of commands) {
                    if (command.name == name) {
                        guild.commands.delete(command.id);
                    };
                };
            });
        } else {
            if (!client.application.owner) await client.application.fetch();
            client.applications.commands.fetch().then(commands => {
                for (let command of commands) {
                    if (command.name == name) {
                        client.applications.commands.delete(command.id);
                    };
                };
            });
        };
    };

};

module.exports = betterDJS;