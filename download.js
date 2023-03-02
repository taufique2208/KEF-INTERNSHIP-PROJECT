const https = require('https');
const fs = require('fs');
const path = require('path');
const foldername=`C:\Reportsnode`;
        try{
            if(!fs.existsSync(foldername)){
                fs.mkdirSync(foldername);
            }
        }catch(e){
            console.log(e)
        }
// const path1 = path.join(foldername ,'index.xls')
// fs.createWriteStream(path1)