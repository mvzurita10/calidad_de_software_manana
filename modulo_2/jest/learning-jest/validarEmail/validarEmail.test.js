const { validarEmail } = require('./validarEmail');

describe('validarEmail', () => {

    test('Sad path: llamar sin argumentos lanza error', () => {
        expect(() => validarEmail()).toThrow('email debe ser un string');
    });

    test('Happy path: retorna true para un email válido', () => {
        expect(validarEmail('fran.n.d@gmail.com')).toBe(false);
    });

    test('Sad path: tipo inválido', () => {
        expect(() => validarEmail(3455)).toThrow('email debe ser un string');
    });
});