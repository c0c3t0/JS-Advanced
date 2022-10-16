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

            expect(() => repo.add(entity)).to.throw(`Property name is missing from the entity!`);

            let entity2 = {
                name: "Pesho",
                // age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repo.add(entity2)).to.throw(`Property age is missing from the entity!`);

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

            expect(() => repo.add(entity)).to.throw('Property name is not of correct type!');

            let entity2 = {
                name: 'Pesho',
                age: '22',
                birthday: new Date(1998, 0, 7)
            };
            expect(() => repo.add(entity2)).to.throw('Property age is not of correct type!');

            let entity3 = {
                name: 'Pesho',
                age: 22,
                birthday: ''
            };
            expect(() => repo.add(entity3)).to.throw('Property birthday is not of correct type!');
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

            let info = repo.data.get(0);

            expect(info).to.deep.equal({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
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

            expect(repo.getId(0)).to.deep.equal({ name: 'Pesho', age: 22, "birthday": new Date(1998, 0, 7) });
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

            expect(() => { repo.getId(1) }).to.throw('Entity with id: 1 does not exist!');
        });
    });

    describe('update(id, newEntity)', () => {
        it('should update person\'s info', () => {
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
            let newEntity = {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(repo.add(entity)).to.equal(0);
            repo.update(0, newEntity);
            expect(repo.getId(0)).to.deep.equal({ name: 'Gosho', age: 22, "birthday": new Date(1998, 0, 7) });
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
            let newEntity = {
                name: 'Pesho',
                age: '22',
                birthday: new Date(1998, 0, 7)
            };

            expect(repo.add(entity)).to.equal(0);

            expect(() => { repo.update(1, newEntity) }).to.throw('Entity with id: 1 does not exist!');
        });

        it("should throw if some data is missing", () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repo = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let newEntity = {
                // name: 'Pesho',
                age: '22',
                birthday: new Date(1998, 0, 7)
            };

            repo.add(entity);

            expect(() => repo.add(newEntity)).to.throw(`Property name is missing from the entity!`);
        });

        it("should throw if data type is not correct", () => {
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
            let newEntity = {
                name: 'Pesho',
                age: '22',
                birthday: new Date(1998, 0, 7)
            };
            expect(repo.add(entity)).to.equal(0);
            expect(() => repo.update(0, newEntity)).to.throw('Property age is not of correct type!')

            let newEntity2 = {
                name: 'Pesho',
                age: 22,
                birthday: undefined
            };
            expect(() => repo.update(0, newEntity2)).to.throw('Property birthday is not of correct type!')

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

            expect(() => { repo.getId(1) }).to.throw('Entity with id: 1 does not exist!');
        });
    });



    describe('del(id)', () => {
        it('should delete person\'s info', () => {
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
            let newEntity = {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(repo.add(entity)).to.equal(0);
            expect(repo.add(newEntity)).to.equal(1);
            repo.del(1);
            expect(repo.getId(0)).to.deep.equal({ name: 'Pesho', age: 22, "birthday": new Date(1998, 0, 7) });
            expect(() => { repo.getId(1) }).to.throw('Entity with id: 1 does not exist!');
        });

        it("Should delete the entity at the given index", function () {
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
            repo.add(entity);
            repo.add(entity);
            repo.del(0);

            expect(repo.count).to.equal(1);
            let info = repo.data.get(1);

            expect(info).to.deep.equal({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
            expect(repo.data.get(0)).to.be.undefined;

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

            expect(() => { repo.del(1) }).to.throw('Entity with id: 1 does not exist!');
            expect(() => { repo.del(-1) }).to.throw('Entity with id: -1 does not exist!');
        });
    });
});
