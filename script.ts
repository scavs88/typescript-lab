interface Mountain
{
    Name:string;
    Height:number;
}
let m1: Mountain = {
    Name:"Kilimanjaro",
    Height:19341
}
let m2: Mountain = {
    Name:"Everest",
    Height:29029
}
let m3: Mountain = {
    Name:"Denali",
    Height:20310
}
let Mountains:Mountain[] = [
    m1,
    m2,
    m3
];
function FindNameOfTallestMountain(mountains:Mountain[]):string
{
    let result: Mountain = {
        Name:"",
        Height:null
    };
    mountains.forEach(function(mount:Mountain){
        if(mount.Height>result.Height){
            result = mount;
        }
    });
    return result.Name;
}
FindNameOfTallestMountain(Mountains);
let tallest:string = FindNameOfTallestMountain(Mountains);
console.log(tallest);




interface Product
{
    name:string;
    price:number;
}

let p1: Product = {
    name:"Beer",
    price:10
}
let p2: Product = {
    name:"Wine",
    price:15
}
let p3: Product = {
    name:"Scotch",
    price:30
}
let Items:Product[] = [
    p1,
    p2,
    p3
];

function CalcAverageProductPrice(items:Product[]):number
{let total:number = 0;
    let average:number = 0;

    items.forEach(function(i:Product){
           total += i.price;       
    });

    average = (total/items.length)
    return average;
};

let average:number = CalcAverageProductPrice(Items);
console.log(average);


interface InventoryItem
{
    product:Product;
    quantity:number;
}

let item1: InventoryItem = {
    quantity:10,
    product:
    {
        name:"motor",
        price:10
    }
}

let item2: InventoryItem = {
    quantity:4,
    product:
    {
        name:"sensor",
        price:12.50
    }
}

let item3: InventoryItem = {
    quantity:20,
    product:
    {
        name:"LED",
        price:1
    }
}
let Inv:InventoryItem[] = [
    item1,
    item2,
    item3
]

function CalcInventoryValue(inv:InventoryItem[]):number
{
    let total:number = 0;
    inv.forEach(function(f:InventoryItem){
        total += f.product.price*f.quantity
    })
    return total;
}

let totalInv:number = CalcInventoryValue(Inv);
console.log(totalInv);