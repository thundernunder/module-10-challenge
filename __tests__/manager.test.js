const Intern = require('../lib/manager');

describe("Manger"), () => {
    it("Should create new Manager object", () => {
        const manager = new Manager('Nathan', 1, 'nathanrolandpotter@yahoo.com');

        expect(manager.getOfficeNumber().not.toBeNull());
    });

    describe("Manager Office Number", () => {
        it("Should get Manger Office Number from getOfficeNumber()", () => {
            const manager = new Manager('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(manager.getOfficeNumber().not.toBeNull());
        })
        
    });

    describe('Get employee role', () => {
        it('Should be able to get employee role', () => {
            const manager = new Manager('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(manager.getRole()).toEqual("Manager");
        });
    });
}