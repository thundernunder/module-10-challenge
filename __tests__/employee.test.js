const Employee = require('../lib/employee.js');

describe('Employee', () => {
    it('should be able to create a new Employee object', () => {
        const employee = new Employee('Nathan', 1, 'nathanrolandpotter@yahoo.com');

        expect(employee.name).not.toBeNull();

        expect(employee.email).not.toBeNull();

        expect(employee.id).toEqual(expect.any(Number));

    });

    describe('Get employee name', () => {
        it('Should be able to get employee name', () => {
            const employee = new Employee('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(employee.name).not.toBeNull();
        });
    });

    describe('Get employee id', () => {
        it('Should be able to get employee id', () => {
            const employee = new Employee('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(employee.id).toEqual(expect.any(Number));
        });
    });

    describe('Get employee email', () => {
        it('Should be able to get employee email', () => {
            const employee = new Employee('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(employee.email).not.toBeNull();
        });
    });

    describe('Get employee role', () => {
        it('Should be able to get employee role', () => {
            const employee = new Employee('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
    
