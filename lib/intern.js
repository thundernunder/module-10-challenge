const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Intern class shares name, id , email with Employee 
        super(name, id, email);

        // need to add school here since this attributte not shared with Employee 
        this.school = school;
    }

    getSchool() {
        return this.school;
    };

    // override role to Engineer if selected
    getRole() {
        return 'Intern';
    };
}

module.exports = Intern;