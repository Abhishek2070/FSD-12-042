# Eventloop
JS is synchronous and single threaded bydefault

## There can be async behaviour
- with BrowserAPI - setTmeout, SetInterval, 
setImmediate, nextTick
- with promises
- with event handlers
  /
    Promises-A function not executed immediately but it must be executed after a while.
    It as some status during the execution.
    At final it may resolve()- success and reject()- unsucessful

    call back function => that pass as argument or the parameter to another function
    Modern javascript is divided into two-
    1. common js (.cjs)- support OOPS -> require
       - priority (nextTick, promise, set immediate/setTimeout)
    2. Module JS.(.mjs)-follow modular approach __-> import
       - priority ( promise, nextTick,, set immediate/setTimeout)
