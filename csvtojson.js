const csv = require('csvtojson');
const path = require('path');
const fs = require('fs');
const csvFilePath = process.argv[2];


csv().fromFile(csvFilePath, (error, result) => {
  if(error)
    console.error("--" + error);
  else {
  fs.writeFileSync(path.join(__dirname, toJsonFormat(csvFilePath)), JSON.stringify(result, null, 2));
  console.log("The JSON file was saved");
  }
})

// Converts any file path to <filename>.json
toJsonFormat = (filePath) => {
  let csvbasename = path.basename(filePath);
  return csvbasename.replace("csv","json");
}
