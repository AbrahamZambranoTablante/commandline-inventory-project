const { readJSONFile, writeJSONFile} = require("./src/helpers");
const { create, index, remove, show, update, add } = require("./src/t-shirtsController");

function run () {
    let tShirtsData = readJSONFile("./data", "t-shirts.json");
    let shoppingCart = readJSONFile("./data", "cart.json");
    const command = process.argv[2];
    let newTShirt = process.argv.slice(3);
    let writeToFile = false;
    let writeToCartFile = false;
    let id = process.argv[3]
    let newStock = process.argv[4];
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
            inform("Item was removed");
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
        case "add":
            updatedCart = add(tShirtsData, updatedCart, id);
            inform("Item added to cart");
            writeToCartFile = true;
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