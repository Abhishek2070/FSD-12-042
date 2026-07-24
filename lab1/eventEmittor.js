  import { EventEmitter } from "node:events";
  const login = (name) => {
    console.log(`${name} has logged in`);
};

login("abhi dubey");

const start = () => {
    console .log("system starts");

};
const working = (name) =>{
    console.log(`${name} add items to cart`);


};
const checkout = (name) => {
    console.log(`${name} has logged out`);
};

const task = new EventEmitter();
task.once("greet", start);
task.on("greet",login);
task.on("greet", working);
task.on("greet", checkout);
task.once("exit",()=>{
    console.log("system shutting down");

})
task.emit("greet", "abhishek Dubey");
task.emit("greet"," abhi dubey");
task.off("greet",working);
task.emit("greet", "abhay");
task.emit("exit");
// nameless function ()=> {}
