const { deepMerge, normalizarAlumno } = require('./deepMerge');

describe('Igualidad profunda', () => {

    test('Happy path: deepMerge combina objetos anidados por valor', () => {
        const a = {
            user: { nombre: 'Ana', rol: 'Estudiante' },
            activo: true
        };

        const b = {
            user: { rol: 'Tutor' },
            activo: true,
            extra: 1
        };

        const response = deepMerge(a, b);

        expect(response).toEqual({
            user: { nombre: 'Ana', rol: 'Tutor' },
            activo: true,
            extra: 1
        });
    });

    test('Happy path: normalizarAlumno retorna estructura con promedio', () => {
        const alumno = { nombre: 'Ana', notas: [8, 9, 7] };
        const response = normalizarAlumno(alumno);

        expect(response).toEqual({
            nombre: 'Ana',
            notas: [8, 9, 7],
            promedio: 8
        });
    });

    test('Sad path: deepMerge con parámetros inválidos', () => {
        expect(() => deepMerge(null, {})).toThrow('a debe ser un objeto válido');
        expect(() => deepMerge({}, [])).toThrow('b debe ser un objeto válido');
    });
});
