const {coffeeStock, isCoffeeMachineReady} = require('./state');

// const makeCoffee = (type, miligrams)=>{
//     if (coffeeStock[type] >= miligrams){
//         console.log("Kopi berhasil dibuat");
//     } else {
//         console.log("Biji Kopi habis");
//     }
// }

// makeCoffee("robusta",80)
console.log(isCoffeeMachineReady)
console.log(coffeeStock)