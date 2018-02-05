const csv = require('csvtojson');
const path = require('path');
const fs = require('fs');

csv().fromFile(process.argv[2], (error, result) => {
  if(error)
    console.error("--" + error);
  else {
  fs.writeFileSync(path.join(__dirname, path.basename(process.argv[2]).replace("csv","json")), JSON.stringify(result, null, 2));
  console.log("The JSON file was saved");
  }
})
