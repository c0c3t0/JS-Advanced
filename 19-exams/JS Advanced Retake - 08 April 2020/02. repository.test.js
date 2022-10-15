const { expect } = require('chai');
const { Repository } = require("./02. repository.js");

describe("Repository Tests", () => {
    describe("constructor(props) test", () => {
        it("should work properly", () => {
            let info = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            }
            let repo = new Repository(info);

            expect(repo).instanceOf(Repository);
            expect(typeof repo).to.equal('object');
            expect(repo.props).to.deep.equal({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            expect(repo.count).to.equal(0);
            expect(repo.data).to.deep.equal(new Map);
            expect(repo.nextId()).to.equal(0);
        });
    });

    describe("add(entity) test", () => {
        it("should throw if some data is missing", () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repo = new Repository(properties);

            let entity = {
                // name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repo.add(entity)).to.throw(`Property name is missing from the entity!`)
        });

        it("should throw if data type is not correct", () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repo = new Repository(properties);

            let entity = {
                name: ['Pesho'],
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repo.add(entity)).to.throw('Property name is not of correct type!')
        });

        it("should return proper id", () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repo = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(repo.add(entity)).to.equal(0);
            expect(repo.add(entity)).to.equal(1);

        });
    });

    describe('getId(id)', () => {
        it('should return person\'s info', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repo = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(repo.add(entity)).to.equal(0);
            expect(repo.add(entity)).to.equal(1);

            expect(repo.getId(1)).to.deep.equal({ name: 'Pesho', age: 22, "birthday": new Date(1998, 0, 7) });
        });

        it('should throw if no such id', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repo = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(repo.add(entity)).to.equal(0);

            expect(() => {repo.getId(1)}).to.throw('Entity with id: 1 does not exist!');
        })
    })
});
