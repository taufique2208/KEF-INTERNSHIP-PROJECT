const{BrowserWindow, app}= require('electron')
const path= require('path')

const createWindow=()=>{
    const win= new BrowserWindow({
        movable:true,
        resizable:true,
        maximizable:true,
        minimizable:true,
        // autoHideMenuBar:true,
        
        icon: __dirname+'/assests/icon.ico',
        webPreferences:{
            preload:path.join(__dirname,'preload.js'),
            nodeIntegration:true,
            contextIsolation:false
        }

    })
    win.loadFile('index.html')
}

app.whenReady().then(()=>{
    let {width,height}=require('electron').screen.getPrimaryDisplay().size;
    createWindow({width:width,height:height});
});

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin') app.quit
})


// module.exports={
//     mFunc:function mFunc(){
//         const win= new BrowserWindow({
//             fullscreen:true,
//             webPreferences:{
//                 preload:path.join(__dirname,'preload.js'),
//                 nodeIntegration:true,
//                 contextIsolation:false
//             }
    
//         })
    
//         win.loadFile('index.html')
//     }
// }