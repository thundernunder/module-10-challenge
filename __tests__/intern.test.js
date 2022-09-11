const Intern = require('../lib/intern');

describe("Intern", () => {
    it("Should create new Inter object", () => {
        const intern = new Intern('Nathan', 1, 'nathanrolandpotter@yahoo.com', 'cool school');

        expect(intern.school).not.toBeNull();
    });

    describe("Intern School", () => {
        it("Should get Intern School from getSchool()", () => {
            const intern = new Intern('Nathan', 1, 'nathanrolandpotter@yahoo.com', 'cool school');

            expect(intern.getSchool()).toEqual(expect.any(String));
        })
        
    });

    describe('Get employee role', () => {
        it('Should be able to get employee role', () => {
            const intern = new Intern('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});