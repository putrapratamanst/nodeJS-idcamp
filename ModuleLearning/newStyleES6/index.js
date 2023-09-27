import {coffeeStock,isCoffeeMachineReady} from "./state.js";
const displayStock = coffeeStock =>{
    for (const type in coffeeStock){
        console.log(type)
    }
}

displayStock(coffeeStock)
console.log(isCoffeeMachineReady)