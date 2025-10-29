const {crearEstudiante} = require('./crearEstudiante');

describe('CrearEstudiante', () => {
    test('Happy path', () => {
        expect(CrearEstudiante(Maria, 17)).toBe({
            nombre: 'Maria',
            edad: 17
        });
    });

    test('Sad path - nombre/edad invalido', () => {
        expect(() => crearEstudiante('', 20)).toThrow ('nombre invalido');
        expect(() => crearEstudiante("Maria", -1)).toThrow ("edad invalida");
    });
});  