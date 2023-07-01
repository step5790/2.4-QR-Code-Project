/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

// *** Inquire ***
inquirer
  .prompt([
    {
      message: "Type your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const url = answers;
    makeQR(url);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// *** write ***
function makeQR(url) {
  console.log(url);

  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("i_love_qr.svg"));

  var svg_string = qr.imageSync("I love QR!", { type: "svg" });
}

// *** write ***
function writeAnswer(url) {
  writeFile("url.txt", url, "utf-8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}
