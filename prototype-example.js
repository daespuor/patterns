/** The GoF pattern prototype is about creating copies (prototypes) of objects, in JavaScript this
 * could be done using prototypal inheritance,Object.assign or {...object}
 * 
  */

//Using prototypal inheritance
const Vehicle = (color) => ({
    color,
    run() {
        console.log(`I am running, because I'm ${this.color} 🚀`);
    }
});
const vehicle = Vehicle("white");
const car = Object.create(vehicle); //Creating a "copy" of vehicle using prototypal inheritance
//car is now attached to vehicle prototype and that's why it has access to run() and color
car.run(); // output: I am running, because I'm white 🚀

console.log(Object.getOwnPropertyNames(car)); // output: [] It's empty because run and color comes from vehicle using object delegation
console.log(Object.getOwnPropertyNames(vehicle)); //output: ["color", "run"]

//We can create copies of objects with Object.assign and in the example below I use composition too
const VehicleMixin = (vehicle) => {
    function stop(){
        console.log(`I'm stopping, because I'm the ${vehicle.color} vehicle`);
    }

    return Object.assign({},vehicle, {stop}); //Creating a copy of vehicle and using composition to extend the basic functionality
}

//The object created by the mixin has now the same behavior of vehicle with an extra stop property, 
// also it owns the original properties run() and color because I'm using Object.assing instead of create 
const newCar = VehicleMixin(vehicle);
newCar.run(); // output: I am running, because I'm white 🚀
newCar.stop(); //output: I'm stopping, because I'm the white vehicle
console.log(Object.getOwnPropertyNames(newCar)); // output: ["color", "run", "stop"]

