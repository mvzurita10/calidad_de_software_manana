const { calcularTotalCafeteria } = require('./calcularTotalCafeteria');

describe('calcularTotalCafeteria', () => {


    test('Debe calcular la suma total correctamente (precio * cantidad)', () => {
        const items = [
            { precio: 10, cantidad: 2 }, 
            { precio: 5, cantidad: 1 }   
        ];
        expect(calcularTotalCafeteria(items, 16)).toBe(25);
    });

    test('Debe retornar 0 si el arreglo de items está vacío', () => {
        expect(calcularTotalCafeteria([], 16)).toBe(0);
    });



    test('Debe lanzar error si el primer argumento no es un arreglo', () => {
        expect(() => calcularTotalCafeteria(null)).toThrow('items debe ser un arreglo');
        expect(() => calcularTotalCafeteria(undefined)).toThrow('items debe ser un arreglo');
        expect(() => calcularTotalCafeteria("texto")).toThrow('items debe ser un arreglo');
    });

    test('Debe lanzar error si un item tiene precio o cantidad inválidos', () => {
        const itemsMalos = [
            { precio: 10, cantidad: 2 },
            { precio: 'diez', cantidad: 1 } 
        ];
        expect(() => calcularTotalCafeteria(itemsMalos)).toThrow('Cada item debe tener precio y cantidad numericos');
    });

    test('Debe lanzar error si falta una propiedad en el item', () => {
        const itemsIncompletos = [
            { precio: 10 } 
        ];
        expect(() => calcularTotalCafeteria(itemsIncompletos)).toThrow('Cada item debe tener precio y cantidad numericos');
    });

}); 