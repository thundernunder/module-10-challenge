const Employee = require('./employee');

class Engineeer extends Employee {
    constructor(name, id, email, github) {
        // Engineer class shares name, id , email with Employee 
        super(name, id, email);

        // need to add github here since this attributte not shared with Employee 
        this.github = github;
    }

    getGithub() {
        return this.github;
    };

    // override role to Engineer if selected
    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineeer;