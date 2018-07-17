const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('Should add two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
            // if(res !== 44)
            //     throw new Error(`Exprected 44, but got ${res}.`);
        });
    });
    
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('Should square a number', () => {
        var res = utils.square(2);
    
        expect(res).toBe(4).toBeA('number');
        // if(res!== 4)
        //     throw new Error(`Expected 4 but got ${res}`)
    });
    
    it('Should async square a number', (done) => {
        utils.asyncSquare(5, (sum) => {
            expect(sum).toBe(25).toBeA('number');
            done();
        });
    });
});


// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Andrew'}).toNotEqual({name: 'andrew'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philly'
//     }).toExclude({
//         age:23
//     })
// });

it('Should be set', () => {
    var user = {location: "Philly", age: 100};
    var res = utils.setName(user, 'Shane Honanie');

    expect(res).toInclude({
        firstName: 'Shane', 
        lastName: 'Honanie'
    });
});