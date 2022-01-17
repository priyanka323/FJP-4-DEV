// File System Module

//****   Files   *****/

const fileSystem = require("fs");

// //1. We will be Reading Writing Updating and Deleting in a file

// //TO read a file you can us readFileSync Method


// let content = fileSystem.readFileSync("f1.txt")
// console.log("This is file data ->" + content)

// // Writing to a file
// // writeFileSync method is used to write to a file

// // if the file name that is passed does not exists it will created a new file with that name
// // and will write the data to it


// fileSystem.writeFileSync('f3.txt', 'file 3 data')
// console.log('File written')

// append a file

//appendFileSync is a method which is used to update a file

// fileSystem.appendFileSync("f2.txt", "more data");
// console.log("File Updated");

// delete a file
// unlinkSync method is used to delete a file

// fileSystem.unlinkSync("f3.txt");

//**   Directories   **//

// create , delete , check , stats , content


// fileSystem.mkdirSync('myDirectory')
// console.log('Directory Created')


// deleting or removing a Directory

// fileSystem.rmdirSync('myDirectory')
// console.log('Directory Removed')


// existsSync method lets you know that a file/folder exists or not
// and it returns true or false

// let doesExist = fileSystem.existsSync('myDirectory')

// console.log(doesExist)



// lstatSync 

let statistics = fileSystem.lstatSync('f1.txt')


console.log('is File?' ,statistics.isFile()) // 

console.log('isDirectory?' , statistics.isDirectory()) // 


















