import React from "react";

const img = () => {
    const fs = require('fs');
const path = require('path');

function getFilesInFolder(folderPath) {
  const files = fs.readdirSync(folderPath);
  const fileNames = files.map(file => path.basename(file));
  return fileNames;
}



// Example usage:
const folderPath = ''; // Replace with your folder path
const outputPath = '/path/to/output.json'; // Replace with the desired output JSON path

const fileNames = getFilesInFolder(folderPath);


    return (
        




    )};


    export default img