const { nanoid } = require("nanoid");

function create (tShirtsData, tShirtInfo) {
    const [team, season, size, kit, price, stock] = tShirtInfo;
    const tShirt = {
        team: team,
        season: season,
        size: size,
        kit: kit,
        price: price,
        stock: stock,
        id: nanoid(5)
    }
    tShirtsData.push(tShirt);
    return tShirtsData;
}

function index (tShirtsData) {
    return tShirtsData.map( tShirt => `ID:${tShirt.id} - TEAM:${tShirt.team} - SEASON:${tShirt.season}`).join("\n");
}

function remove (tShirtsData, id){
    const updatedTShirtData = tShirtsData.filter(tShirt => tShirt.id !== id);
    return updatedTShirtData;
}

function show (tShirtsData, id) {
    const foundItem = tShirtsData.find(tShirt => tShirt.id === id);
    return `TEAM: ${foundItem.team} \nSEASON: ${foundItem.season} \nSIZE: ${foundItem.size} \nPRICE: ${foundItem.price} \nIN STOCK: ${foundItem.stock} \nID: ${foundItem.id}`;
}

function update (tShirtsData, id, newStock) {
    const index = tShirtsData.findIndex(tShirt => tShirt.id === id);
    tShirtsData[index].stock = newStock;
    return tShirtsData;
}

function add (tShirtsData, cartData, id) {
    const foundItem = tShirtsData.find(tShirt => tShirt.id === id);
    cartData.push(foundItem);
    return cartData;
}

function eliminate (cartData, id) {
    const updatedCartData = cartData.filter(item => item.id !== id);
    return updatedCartData;
}

function clear (cartData){
    return [];
}

module.exports = { create, index, remove, show, update, add, eliminate, clear };