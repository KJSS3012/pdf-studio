import { dialog, ipcMain, BrowserWindow } from 'electron'

const openFileDialog = () => {
  ipcMain.handle('dialog:openFile', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      properties: ['openFile'],
    })
    if (canceled) return null
    return filePaths[0]
  })
}

const sendRenderPage = () => {
  ipcMain.on('render-page', (event) => {
    const win = BrowserWindow.getFocusedWindow()
    if (win) {
      win.webContents.send('render-page')
    }
  })
}

export { openFileDialog, sendRenderPage }
