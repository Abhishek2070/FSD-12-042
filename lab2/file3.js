import {stat} from "fs/promises";
  
const fstat = async("file1.js");

console.log("file.size",fstat.size, "bytes");
console.log(`is file: ${fstat.isFile()}`);
console.log(`is folder: ${fstat.isDirectory()}`);
console.log(`is syslink: ${fstat.isSymbolicLink()}`);
console.log(`is syslink : ${fstat.attime}`);
console.log(`created on : ${fstat.birthtime}`);
console.log(`Last used: ${fstat.atime}`);