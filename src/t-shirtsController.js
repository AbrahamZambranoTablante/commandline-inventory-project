const { nanoid } = require("nanoid");
const chalk = require("chalk");

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

function remove (tShirtsData, id) {
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

function cart (cartData) {
    const total = cartData.reduce((acc, item) => acc += +item.price ,0);
    return cartData.map( item => `ID:${item.id} - TEAM:${item.team} - SEASON:${item.season} PRICE:${item.price}`).join("\n") + "\n" + `TOTAL: ${total.toFixed(2)}`;
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

function clear (cartData) {
    cartData = [];
    return cartData;
}

function instructions () {
    return `${chalk.cyan.bold("DIRECTIONS TO USE")} \n
    ${chalk.bgRed("IMPORTANT:")} All commands need ${chalk.red("npm run")} before the command to be executed \n
    ${chalk.green("create:")} adds a new item to the list. ${chalk.yellow("Requires all information to be enter in the next order:")}
    ${chalk.blue("1.Team")}
    ${chalk.blue("2.Season")}
    ${chalk.blue("3.Size")}
    ${chalk.blue("4.Kit")}
    ${chalk.blue("5.Price")}
    ${chalk.blue("6.Stock")}
    Each element must be introduce with ${chalk.red("no spaces")} and ${chalk.red("first letter capitalize")}. ${chalk.yellow("Example: ManchesterUnited, UnionBerlin.")}
    If the information of any of this elements its missing, replace with ${chalk.red("null")} \n
    ${chalk.green("index:")} displays all items on the inventory.\n
    ${chalk.green("show:")} display one specific item from the inventory. ${chalk.yellow("Requires the ID of such item after the command.")}\n
    ${chalk.green("remove:")} deletes one specific item from the inventory. ${chalk.yellow("Requires the ID of such item after the command.")}\n
    ${chalk.green("update:")} updates the stock of one specific item from the inventory. ${chalk.yellow("Requires first the ID of the item and second the NEW STOCK NUMBER of such item.")}\n
    ${chalk.green("cart:")} displays all items on the shopping cart and the total sum of all item prices.\n
    ${chalk.green("add:")} adds a new item to the shopping cart. ${chalk.yellow("Requires the ID of such item after the command.")}\n
    ${chalk.green("eliminate:")} deletes one specific item from the shopping cart. ${chalk.yellow("Requires the ID of such item after the command.")}.\n
    ${chalk.green("clear:")} deletes all items from the shopping cart.\n
    ${chalk.green("instructions:")} displays directions to use the inventory and shopping cart.`
}

module.exports = { create, index, remove, show, update, add, eliminate, clear, cart, instructions };