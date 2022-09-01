const { expect } = require('chai');
const PaymentPackage = require('./12. paymentPackage');

describe('Payment Package Tests', () => {
    it('should work properly if instantiated with two valid parameters', () => {
        const obj = new PaymentPackage('HR Services', 1500);
        expect(obj.name === 'HR Services').to.be.true;
        expect(obj.value === 1500).to.be.true;
    })
    it('should throw if name is invalid', () => {
        expect(() => { new PaymentPackage([], 100) }).to.throw('Name must be a non-empty string');
        expect(() => { new PaymentPackage({}, 100) }).to.throw('Name must be a non-empty string');
        expect(() => { new PaymentPackage(8, 100) }).to.throw('Name must be a non-empty string');
        expect(() => { new PaymentPackage('', 100) }).to.throw('Name must be a non-empty string');
    });

    it('should throw if value is invalid', () => {
        expect(() => { new PaymentPackage('asd', '100') }).to.throw('Value must be a non-negative number');
        expect(() => { new PaymentPackage('asd', -100) }).to.throw('Value must be a non-negative number');
    });

    it('should throw if VAT is invalid', () => {
        const obj = new PaymentPackage('HR Services', 1500);
        expect(() => { obj.VAT = '' }).to.throw('VAT must be a non-negative number');
        expect(() => { obj.VAT = -100 }).to.throw('VAT must be a non-negative number');
    });

    it('should throw if active is not a boolean', () => {
        const obj = new PaymentPackage('HR Services', 1500);
        expect(() => { obj.active = '' }).to.throw('Active status must be a boolean');
        expect(() => { obj.active = 4 }).to.throw('Active status must be a boolean');
    });

    it('toString should return correct result when active is changed', () => {
        const obj = new PaymentPackage('HR Services', 1500);
        expect(obj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        obj.active = false;
        expect(obj.toString()).to.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
    });

    it('toString should return correct result when VAT is 0', () => {
        const obj = new PaymentPackage('HR Services', 0);
        obj.VAT = 0;
        expect(obj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0');
    });

    it('should change the name when new name is set', () => {
        const obj = new PaymentPackage('HR Services', 1500);
        obj.name = 'PR';
        expect(obj.name).to.equal('PR');
    });

    it('should change the value when new value is set', () => {
        const obj = new PaymentPackage('HR Services', 1500);
        obj.value = 1900;
        expect(obj.value).to.equal(1900);
    });

    it('should change the VAT when new is set', () => {
        const obj = new PaymentPackage('HR Services', 1500);
        obj.VAT = 10;
        expect(obj.VAT).to.equal(10);
    });

    it('VAT should be equal to the default value', () => {
        const obj = new PaymentPackage('Consultation', 800);
        expect(obj.VAT).to.equal(20);
    });

    it('should change active', () => {
        const obj = new PaymentPackage('HR Services', 1500);
        obj.active = false;
        expect(obj.active).to.be.false;
        obj.active = true;
        expect(obj.active).to.be.true;
    });

    it('active should be equal to the default value', () => {
        const obj = new PaymentPackage('Consultation', 800);
        expect(obj.active).to.be.true;
    });
});