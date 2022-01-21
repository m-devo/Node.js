const fs = require("fs");

//Before Exit
process.on("beforeExit",() =>{
 console.log("Print Fifth");        
});

// begin polling phase 
fs.readFile(__filename,()=>{
         //end polling phase
    process.nextTick(()=>{
 console.log("Print Third");       
    });
            });
//end main line
setImmediate(()=>{
    console.log('Print Second');
});

    
//mainline
console.log('Print First');
// timers phase 1
setTimeout(()=>{
    console.log("Print Forth");
}, 3000);
