const {app, BrowserWindow } = require('electron');

let win;

function createWindow(){
    // create the browser window
    win = new BrowserWindow({
        width:600,
        height:600,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`
    });

    win.loadFile(`file://${__dirname}/dist/index.html`);

}