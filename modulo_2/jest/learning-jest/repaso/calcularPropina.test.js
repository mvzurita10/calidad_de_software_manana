const { calcularPropina } = require('./calcularPropina');

describe('2. Cálculo de propina en restaurante', () => {


    test('Debe calcular correctamente la propina y el total', () => {
        const resultado = calcularPropina(100, 10);
        
        expect(resultado.cuenta).toBe(100);
        expect(resultado.propina).toBeCloseTo(10.0);      
        expect(resultado.totalPagar).toBeCloseTo(110.0);  
    });

    test('Debe manejar decimales correctamente usando toBeCloseTo', () => {

        const resultado = calcularPropina(50.50, 15);
        expect(resultado.propina).toBeCloseTo(7.575);
        expect(resultado.totalPagar).toBeCloseTo(58.075);
    });

    test('Debe lanzar TypeError("cuenta inválida") si la cuenta es 0 o negativa', () => {
        expect(() => calcularPropina(0, 10)).toThrow('cuenta inválida');
        expect(() => calcularPropina(-20, 10)).toThrow('cuenta inválida');
    });

    test('Debe lanzar TypeError("cuenta inválida") si la cuenta no es un número', () => {
        expect(() => calcularPropina("cien", 10)).toThrow('cuenta inválida');
    });

    test('Debe lanzar TypeError("porcentaje inválido") si es menor a 0 o mayor a 100', () => {
        expect(() => calcularPropina(100, -5)).toThrow('porcentaje inválido');
        expect(() => calcularPropina(100, 101)).toThrow('porcentaje inválido');
    });
});

