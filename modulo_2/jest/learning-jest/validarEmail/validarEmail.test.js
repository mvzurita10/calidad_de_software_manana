const { validarEmail } = require('./validarEmail');

describe('validarEmail', () => {
    test('Happy path: que devuelva false', () => {
        const response = validarEmail();
        expect(response).toBe(false);
    });
    test ('Happy path: que devuelva true', () => {
            const response = validarEmail('fran.n.d');
            expect(response).toBe(true); 
        });
    test('Sad path: elementos invalidos', 
        () => {
            const response = validarEmail(3455);
            expect(response).toThrow('email debe ser un string');
        });
}); 












describe('Pruebas de la función validarEmail', () => {

    test('Debe retornar true para un email válido', 
        () => {
        expect(validarEmail('usuario@example.com')).toBe(true);
        expect(validarEmail('miky.zurita@dominio.ec')).toBe(true);
    });

    test('Debe retornar false para un email inválido', 
        () => {
        expect(validarEmail('usuarioexample.com')).toBe(false);
        expect(validarEmail('usuario@.com')).toBe(false);
        expect(validarEmail('@dominio.com')).toBe(false);
        expect(validarEmail('usuario@dominio')).toBe(false);
    });

    test('Debe lanzar un error si el argumento no es un string', () => {
        expect(() => validarEmail(123)).toThrow('email debe ser un string');
        expect(() => validarEmail(null)).toThrow('email debe ser un string');
        expect(() => validarEmail(undefined)).toThrow('email debe ser un string');
        expect(() => validarEmail({})).toThrow('email debe ser un string');
    });
});
