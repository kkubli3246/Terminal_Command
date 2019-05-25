const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);
  });

};

module.exports.touch = (file) => {
    fs.writeFile(file,'', function(err){
        if(err) throw err;
        console.log('File created successfully ' + file) ;
    });
};
  
  module.exports.mkdir = (dir) => {
    fs.mkdir(dir,{recursive: true}, (err) =>{
        if(err) throw err;
        console.log('Created New Directory ' + dir);
    })
};