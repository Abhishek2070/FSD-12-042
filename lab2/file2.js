//import { writeFile } from "fs";
import { readFile}  from "fs/promises";

const readData = async(filename)=>{
       try {const content = await readFile(filename,'utf-8');
      return content;
}catch (e) {
    console.log(e.message);
    console.log("File not found");
}
finally{
 console.log("Read data finished"); 
}};


const writeData = async(filename,content)=>{
    

     try {
        await writeFile(filename,content);
     } catch (error) {
        console.log(error.message)
     }
}
const appendData = async(filename, content)=>{
      await appendFile(filename, content);
};
//if a function uses awake keyword then function must be async
const data = await readData("file1.js");
console.log(data);
