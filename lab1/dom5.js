import { eventemitter} from "events";
class Domclass extend Eventemitter{
addeventlistener(eventname, callback){
    this.on(eventname, callback);
}
removeeventlistener(eventname, callback){
    this.off(eventname, callback);
}

}
dispatchEvent ( eventName, eventData = {}){
    const event = {
        type: eventName,
        timespan: new Date();
        ...eventData,
    };
    this.emit(eventName, event)
}

const button = new Domclass();
const handleclick = (event) => {
    console.log (`button clicked type:  ${event.type} at ${event.timespan}`);

    }
    butto
        button.addEventlistener("click" , handleClick);
        button.dispatchEvent("click", {
        target: "resetBtn",
        });