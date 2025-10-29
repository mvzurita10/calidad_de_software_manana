const mayor_edadFilter = require('./mayor_edadFilter');

describe('Mayor de edad', () => {
    test('Happy path: [15, 18, 26, 28] mayor [18, 26, 28]', () => {
        expect(mayor_edadFilter([15, 18, 26, 28])).toEqual([18, 26, 28]);
    });
    test('Happy path: [] mayores []', () => {
        expect(mayor_edadFilter([])).toEqual([]);
    });
    test('Sad path: edad invalida', () => {
        expect(() => mayor_edadFilter('arreglo')).toThrow('arreglo invalido');
    });
});