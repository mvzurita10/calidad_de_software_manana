const {
    obtenerFrutas,
    contienePalabra,
    agregarElemento
} = require('./toContainDemo');

describe('toContain Matcher', () => {

    test('Happy path: Elemento dentro de array', () => {
        const frutas = obtenerFrutas();
        expect(frutas).toContain('pera');
    });

    test('Sad path: palabra NO está dentro del texto', () => {
        const texto = 'Jest es super';
        expect(contienePalabra(texto, 'malo')).toBe(false);
    });

    test('Sad path: elemento no encontrado o tipo incorrecto', () => {
        const frutas = obtenerFrutas();
        expect(frutas).not.toContain('banana');
    });

    test('Sad path: elementos inválidos', () => {
        expect(() => agregarElemento({}, 'x'))
            .toThrow('lista debe ser un array');
    });

});

