const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  updatePageHandle: (callback) => ipcRenderer.on('render-page', callback),
  updatePage: () => ipcRenderer.send('render-page'),
  openFileDialog: () => ipcRenderer.invoke('dialog:openFile'),
})
