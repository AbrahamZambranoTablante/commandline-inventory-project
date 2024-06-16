const { readJSONFile, writeJSONFile} = require("./src/helpers");
const { create, index, remove, show, update, add, eliminate, clear, cart, instructions } = require("./src/t-shirtsController");

function run () {
    let tShirtsData = readJSONFile("./data", "t-shirts.json");
    let shoppingCart = readJSONFile("./data", "cart.json");
    const command = process.argv[2];
    const newTShirt = process.argv.slice(3);
    let writeToFile = false;
    let writeToCartFile = false;
    const id = process.argv[3]
    const newStock = process.argv[4];
    const inform = console.log;
    let updatedTShirtList = [];
    let updatedCart = [];

    switch (command) {
        case "create":
            updatedTShirtList = create(tShirtsData, newTShirt);
            writeToFile = true;
            inform("New item added");
        break;
        case "index":
            const tShirtList = index(tShirtsData);
            inform("T-SHIRT LIST" + "\n" + tShirtList);
        break;
        case "remove":
            updatedTShirtList = remove(tShirtsData, id); 
            inform("Item was removed from inventory");
            writeToFile = true;
        break;
        case "show":
            const item = show(tShirtsData, id);
            inform("SELECTED T-SHIRT"+"\n"+"----------------"+"\n"+item);
        break;
        case "update":
            updatedTShirtList = update(tShirtsData, id, newStock);
            inform("Item was updated")
            writeToFile = true;
        break;
        case "cart":
            inform(cart(shoppingCart));
        break;
        case "add":
            updatedCart = add(tShirtsData, shoppingCart, id);
            inform("Item added to cart");
            writeToCartFile = true;
        break;
        case "eliminate":
            updatedCart = eliminate(shoppingCart, id);
            inform("Item was removed from cart");
            writeToCartFile = true;
        break;
        case "clear":
            updatedCart = clear();
            inform("The cart was cleared");
            writeToCartFile = true;
        break;
        case "instructions":
            inform(instructions())
        break;
        default:
        inform("there was an error");
    }
    if(writeToFile){
        writeJSONFile("./data","t-shirts.json", updatedTShirtList);
    }
    if(writeToCartFile){
        writeJSONFile("./data","cart.json", updatedCart);
    }
}
run();