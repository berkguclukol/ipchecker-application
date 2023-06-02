// main.js

// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const electron = require("electron");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.loadFile('index.html')
    mainWindow.webContents.openDevTools()
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