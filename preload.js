const { contextBridge, ipcRenderer } = require('electron')
const path = require('path')

contextBridge.exposeInMainWorld('electron', {
  drop: (fileName) => {
    ipcRenderer.send('drop', fileName)
  }
})
