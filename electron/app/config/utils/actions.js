import { BrowserWindow, dialog, ipcMain } from 'electron'

const openFile = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'PDFs', extensions: ['pdf'] }],
  })
  if (!canceled && filePaths.length) {
    const win = BrowserWindow.getFocusedWindow()
    win.webContents.send('open-file', filePaths[0])
  }
}

const openFileHandler = () => {
  ipcMain.handle('open-file', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'PDFs', extensions: ['pdf'] }],
    })
    return canceled ? null : filePaths[0]
  })
}

export { openFile, openFileHandler }
