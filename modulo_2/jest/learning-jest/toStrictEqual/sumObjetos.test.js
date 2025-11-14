const { sumObjetos } = require('./sumObjetos');

describe('sumObjetos', () => {

    test('Happy path: Suma de objetos correctamente', () => {
        const obj1 = { x: 2, y: 3 };
        const obj2 = { x: 1, y: 4 };

        const response = sumObjetos(obj1, obj2);

        expect(response).toStrictEqual({ x: 3, y: 7 });
    });

    test('Sad path: Falla si hay propiedades adicionales que no deben estar', () => {
        const obj1 = { x: 2, y: 3 };
        const obj2 = { x: 1, y: 4, z: 0 };

        const response = sumObjetos(obj1, obj2);

        expect(response).not.toHaveProperty('z');

        expect(response).toStrictEqual({ x: 3, y: 7 });
    });

});
