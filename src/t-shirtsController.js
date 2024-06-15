const { nanoid } = require("nanoid");

function create (tShirtsData, tShirtInfo) {
    const [team, season, size, price, stock] = tShirtInfo;
    const tShirt = {
        team: team,
        season: season,
        size: size,
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

function remove(tShirtsData, id){
    const updatedTShirtData = tShirtsData.filter(tShirt => tShirt.id !== id);
    return updatedTShirtData;
}

module.exports = { create, index, remove };