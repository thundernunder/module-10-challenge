const Intern = require('../lib/intern');

describe("Intern"), () => {
    it("Should create new Inter object", () => {
        const intern = new Intern('Nathan', 1, 'nathanrolandpotter@yahoo.com');

        expect(intern.getSchool().not.toBeNull());
    });

    describe("Intern School", () => {
        it("Should get Intern School from getSchool()", () => {
            const intern = new Intern('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(intern.getSchool().not.toBeNull());
        })
        
    });

    describe('Get employee role', () => {
        it('Should be able to get employee role', () => {
            const intern = new Intern('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(intern.getRole()).toEqual("Intern");
        });
    });
}