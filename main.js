// main.js

// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const electron = require("electron");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 550,
        height: 580,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.setIcon(path.join(__dirname, "assets/icon.png"));
    mainWindow.loadFile('public/index.html')
    //mainWindow.webContents.openDevTools()
}
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})