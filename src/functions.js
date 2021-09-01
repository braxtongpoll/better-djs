function optionCheck(option) {
    if (typeof option !== Object) return false;
    if (typeof option.name !== String) return false;
    if (typeof option.type !== String) return false;
    if (!["STRING", "USER", "CHANNEL", "ROLE", "MENTIONABLE", "BOOLEAN", "SUB_COMMAND_GROUP", "SUB_COMMAND", "NUMBER"].includes(option.type)) return false;
    if (option.required) {
        if (typeof option.required !== Boolean) return false;
    };
    return true;
};

exports.optionCheck = optionCheck;