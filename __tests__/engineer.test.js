const Engineeer = require('../lib/engineer');

describe("Engineer"), () => {
    it("Should create new Enginner object", () => {
        const engineer = new Engineer('Nathan', 1, 'nathanrolandpotter@yahoo.com');

        expect(engineer.getGitub().not.toBeNull());
    });

    describe("Enginner GitHub", () => {
        it("Should get Enginner Github from gitHub()", () => {
            const engineer = new Engineer('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(engineer.getGitub().not.toBeNull());
        })
        
    });

    describe("Engineer GitHub", () => {
        it("Should get Enginner Github from gitHub()", () => {
            const engineer = new Engineer('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(engineer.getGitub().not.toBeNull());
        })
    })

    describe('Get employee role', () => {
        it('Should be able to get employee role', () => {
            const engineer = new Engineer('Nathan', 1, 'nathanrolandpotter@yahoo.com');

            expect(Engineer.getRole()).toEqual("Engineer");
        });
    });
}