const { exportAllDeclaration } = require('@babel/types');
var utils  = require('course-utilities');
const { it } = require('node:test');
var greeting = utils.load('./unit.js', 'name');

describe('test greet()', () => {
    test('does function work', function(){
        expect(greet('Elizabeth')).toBeCalled();

        
    });
    
    test('shout response', () => {
        expect(name).toMatch(name.isUpper);
    });



});

//     test('Object properties present', () => {
//         expect(mit).toHaveProperty('city');
//         expect(mit).toHaveProperty('colors');
//         expect(mit).toHaveProperty('mascot');
//     });

//     test('City match', () => {
//         expect(mit.city).toBe('Cambridge');
//     });

//     test('Colors match', () => {
//         expect(mit.colors).toContain('Silver Gray');    
//     });

//     test('Founded range', () => {
//         expect(mit.founded).toBeLessThanOrEqual(1875);
//         expect(mit.founded).toBeGreaterThanOrEqual(1850);    
//     });

//     test('Motto', () => {
//         expect(mit.motto).toMatch('Mens');
//     });
// });