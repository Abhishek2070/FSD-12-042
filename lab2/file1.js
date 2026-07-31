
import { writeFile,appendFile}  from "fs/promises";
 
//await writeFile("hello.txtt", "JS is easy");
await appendFile("hello.txtt", "JS is easy");