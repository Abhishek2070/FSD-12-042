import { eventemitter } from "events";
const button = new eventemitter();
button.on("click", (uname) => {
    console.log(`button clicked by ${uname}`);

});

button.emit("click","raju");
button.emit("click", "kaju");
button.emit("click", "rani");

