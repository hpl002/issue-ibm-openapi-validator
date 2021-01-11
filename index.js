const validator = require("ibm-openapi-validator")
const yaml = require('js-yaml');
const fs   = require('fs');
const $RefParser = require("@apidevtools/json-schema-ref-parser");
 

 //node
 (async()=>{
   //dereferense
   const schema = await $RefParser.dereference("./configs/not-dereferenced.json");
   //save to fs
   fs.writeFileSync("./configs/fully-dereferenced.json", JSON.stringify(schema))
   //run validation and print results// or, if inside `async` function
    const validationResults = await validator(schema);
    console.log("errors", validationResults.errors.length)
    console.log("warnings", validationResults.warnings.length)
 })()
 
// cli

// lint-openapi configs/fully-dereferenced.json -s 
// Total number of errors   : 1
// Total number of warnings : 10
  

// lint-openapi configs/not-dereferenced.json -s
// Total number of errors   : 1
// Total number of warnings : 4