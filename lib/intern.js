const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Engineer class shares name, id , email with Employee 
        super(name, id, email);

        // need to add school here since this attributte not shared with Employee 
        this.school = school;
    }

    getGithub() {
        return this.github;
    };

    // override role to Engineer if selected
    getRole() {
        return 'Intern';
    };
}

module.exports = Intern;