const {filterActiveUsers} = require('./filterActiveUsers');

describe('Filtra usuarios activos', () => {
    test('Happy path: Usuarios filtrados correctamente', () => {
        const users = [
            {id: 1, username: "mvzurita", active: true},
            {id: 2, username: "lgarcia", active: false},
            {id: 3, username: "ejmerino", active: true}
        ]
        const response = filterActiveUsers(users);
        const expectedUsers = [
            {id: 1, username: "mvzurita", active: true},
            {id: 3, username: "ejmerino", active: true}
        ]
        expect(response).toStrictEqual(expectedUsers);
    });
    test ('Sad path: Diferencia tipos de objetos', 
        () => {
            const users = [
                {id: 1, username: "mvzurita", active: true},
                {id: 2, username: "lgarcia", active: false},
            ]
            const response = filterActiveUsers(users);
            const expectedUsers = [
            {id: 1, username: "mvzurita", active: "true"},
        ]
        expect(response).not.toStrictEqual(expectedUsers);
        });
}); 


