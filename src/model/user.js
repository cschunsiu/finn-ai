const uuid = require('uuid');

class User {
    constructor(name, username, email) {
        this.name = name;
        this.id = uuid.v4();
        this.username = username;
        this.email = email;
    }

    getDetails() {
        const user = {
            name: this.name,
            id: this.id,
            username: this.username,
            email: this.email,
        }
        return user;
    }
}

exports.User = User;
