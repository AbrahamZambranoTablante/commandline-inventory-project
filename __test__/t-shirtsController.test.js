const {create, index, remove, show, update, cart, add, eliminate, clear} = require("../src/t-shirtsController");
const inventoryData = require("../data/t-shirts.json");
const cartData = require("../data/cart.json");

describe("create()", () => {

    const expected = inventoryData.length + 1;
    const actual = create(structuredClone(inventoryData), [
        "PSG", 
        "2002/2003",
        "M",
        "Away",
        "59.99",
        "10",
    ]).length;

    test("it should create a new item in the inventory", () => {
        expect(actual).toEqual(expected);
    });

});

describe("index()", () => {

    const actual = index(inventoryData);
    const expected = `ID:YlM5T - TEAM:RealMadrid - SEASON:2023/2024
ID:hJaGX - TEAM:Arsenal - SEASON:2011/2012
ID:E5aDq - TEAM:Olimpiacos - SEASON:2006/2007
ID:ZHdfY - TEAM:Juventus - SEASON:1999/2000
ID:sV_SJ - TEAM:Barcelona - SEASON:2024/2025`

    test("it should return a string with all the items on the inventory", () => {
        expect(actual).toEqual(expected)
    });

});

describe("remove()", () => {

    const inventory = [{
        team:"Barcelona",
        season:"2024/2025",
        size:"XXL",
        kit:"Home",
        price:"69.50",
        stock:"78",
        id:"sV_SJ"
    },{
        team:"RealMadrid",
        season:"2023/2024",
        size:"M",
        kit:"Away",
        price:"129.99",
        stock:"800",
        id:"YlM5T"
    }];
    const actual = remove(inventory, "sV_SJ");
    const expected = [{
        team:"RealMadrid",
        season:"2023/2024",
        size:"M",
        kit:"Away",
        price:"129.99",
        stock:"800",
        id:"YlM5T"
    }];

    test("it should remove one item from the inventory", () => {
        expect(actual).toEqual(expected);
    });

});

describe("update()", () => {

    const inventory = [{
        team: "RealMadrid",
        season: "2023/2024",
        size: "M",
        kit: "Away",
        price: 129.99,
        stock: 800,
        id: "YlM5T"
    }];
    const actual = update(inventory, "YlM5T", 126);
    const expected = [{
        team: "RealMadrid",
        season: "2023/2024",
        size: "M",
        kit: "Away",
        price: 129.99,
        stock: 126,
        id: "YlM5T"
    }];

    test("should update the stock of one specific item", () => {
        expect(actual).toEqual(expected);
    });

});

describe("cart()", () =>{

    const actual = cart(cartData);
    const expected = `ID:sV_SJ - TEAM:Barcelona - SEASON:2024/2025 PRICE:69.50
ID:YlM5T - TEAM:RealMadrid - SEASON:2023/2024 PRICE:129.99
TOTAL: 199.49`

    test("it should return a string with all the items on the cart", () => {
        expect(actual).toEqual(expected);
    });

});

describe("add()", () => {

    const cart = [];
    const actual = add(inventoryData, cart, "E5aDq");
    const expected = [{
        team:"Olimpiacos",
        season:"2006/2007",
        size:"S",
        kit:"Third",
        price:"39.77",
        stock:"244",
        id:"E5aDq"
    }]    

    test("it should add an item from the inventory to the cart", () => {
        expect(actual).toEqual(expected);
    });

});

describe("eliminate()", () => {

    const cart = [{
        team:"Barcelona",
        season:"2024/2025",
        size:"XXL",
        kit:"Home",
        price:"69.50",
        stock:"78",
        id:"sV_SJ"
    },{
        team:"RealMadrid",
        season:"2023/2024",
        size:"M",
        kit:"Away",
        price:"129.99",
        stock:"800",
        id:"YlM5T"
    }];
    const actual = eliminate(cart, "YlM5T");
    const expected = [{
        team:"Barcelona",
        season:"2024/2025",
        size:"XXL",
        kit:"Home",
        price:"69.50",
        stock:"78",
        id:"sV_SJ"
    }];

    test("it should remove one item from the cart", () => {
        expect(actual).toEqual(expected);
    });

});

describe("clear()", () => {

    const cart = structuredClone(cartData);

    test("it should remove all items from the cart", () => {
        expect(clear(cart)).toEqual([]);
    });
    
});