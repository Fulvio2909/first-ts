// type UserType =  {
//     username: String;
//     password: String;
//     status: Number;
//     permissions: string[];
// }
function createUser(username, password, status, permissions) {
    return {
        username: username,
        password: password,
        status: status,
        permissions: permissions
    };
}
function createOrder(id, total, imponibile, iva, products) {
    return {
        id: id,
        total: total,
        imponibile: imponibile,
        iva: iva,
        products: products
    };
}
var newUser = createUser('newUser', 'password123', 1, ['read', 'write']);
var order1 = createOrder(1, 100, 80, 20, ['carote', 'limoni']);
var order2 = createOrder(2, 200, 160, 40, ['pane', 'pasta']);
newUser.orders = [order1, order2];
console.log(newUser.orders);
