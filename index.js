const discord_permission = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS", "NONE"];
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


};

module.exports = betterDJS;