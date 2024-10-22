// type UserType =  {
//     username: String;
//     password: String;
//     status: Number;
//     permissions: string[];
// }

// const user: UserType = {
//     username: 'admin',
//     password: 'admin',
//     status: 1,
//     permissions: ['read', 'write', 'delete']
// }

// console.log(user.username);

// type RolesType = 'admin' | 'guest';

// const role: RolesType = 'admin';

// console.log(role);

/*
Esercizio 1: 
Creare un nuovo utente (funzione). l'utente ha username, password, status, permissions
creare un ordine con un id, un totale, imponibile, iva e una lista di prodotti
creare un secondo ordine con un id, un totale, imponibile, iva e una lista di prodotti

assegnare all'utente gli ordini

visualizzare nel console.log l'utente con gli ordini a lui associati
*/
type UserType =  {
    username: String;
    password: String;
    status: Number;
    permissions: string[];
    orders?: OrderType[];
}

type OrderType = {
    id: number;
    total: number;
    imponibile: number;
    iva: number;
    products: string[];
}

function createUser(username: string, password: string, status: number, permissions: string[]): UserType {
    return {
        username,
        password,
        status,
        permissions
    };
}

function createOrder(id: number, total: number, imponibile: number, iva: number, products: string[]): OrderType {
    return {
        id,
        total,
        imponibile,
        iva,
        products
    };
}

const newUser = createUser('newUser', 'password123', 1, ['read', 'write']);

const order1 = createOrder(1, 100, 80, 20, ['carote', 'limoni']);

const order2 = createOrder(2, 200, 160, 40, ['pane', 'pasta']);

newUser.orders = [order1, order2];

console.log(newUser.orders);