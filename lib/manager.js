const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Manager class shares name, id , email with Employee 
        super(name, id, email);

        // need to add office number here since this attributte not shared with Employee 
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    };

    // override role to Engineer if selected
    getRole() {
        return 'Manager';
    };
}

module.exports = Manager;