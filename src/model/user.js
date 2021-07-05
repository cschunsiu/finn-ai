const uuid = require('uuid');

class User {
    constructor(name, username, email) {
        this.name = name;
        this.id = uuid.v4();
        this.username = username;
        this.email = email;
    }
}

exports.User = User;
