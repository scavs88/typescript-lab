var m1 = {
    Name: "Kilimanjaro",
    Height: 19341
};
var m2 = {
    Name: "Everest",
    Height: 29029
};
var m3 = {
    Name: "Denali",
    Height: 20310
};
var Mountains = [
    m1,
    m2,
    m3
];
function FindNameOfTallestMountain(mountains) {
    var result = {
        Name: "",
        Height: null
    };
    mountains.forEach(function (mount) {
        if (mount.Height > result.Height) {
            result = mount;
        }
    });
    return result.Name;
}
FindNameOfTallestMountain(Mountains);
var tallest = FindNameOfTallestMountain(Mountains);
console.log(tallest);
var p1 = {
    name: "Beer",
    price: 10
};
var p2 = {
    name: "Wine",
    price: 15
};
var p3 = {
    name: "Scotch",
    price: 30
};
var Items = [
    p1,
    p2,
    p3
];
function CalcAverageProductPrice(items) {
    var total = 0;
    var average = 0;
    items.forEach(function (i) {
        total += i.price;
    });
    average = (total / items.length);
    return average;
}
;
var average = CalcAverageProductPrice(Items);
console.log(average);
var item1 = {
    quantity: 10,
    product: {
        name: "motor",
        price: 10
    }
};
var item2 = {
    quantity: 4,
    product: {
        name: "sensor",
        price: 12.50
    }
};
var item3 = {
    quantity: 20,
    product: {
        name: "LED",
        price: 1
    }
};
var Inv = [
    item1,
    item2,
    item3
];
function CalcInventoryValue(inv) {
    var total = 0;
    inv.forEach(function (f) {
        total += f.product.price * f.quantity;
    });
    return total;
}
var totalInv = CalcInventoryValue(Inv);
console.log(totalInv);
