
import { readFile } from "fs";
import { writeFile,appendFile}  from "fs/promises";
 
//await writeFile("hello.txtt", "JS is easy");
 await appendFile("hello.txtt", "\nFS is much easy than others 😁 ");
const content = await readFile("hello.txt " , "utf-8");
console.log(content);