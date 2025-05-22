import { app, BrowserWindow } from 'electron'
import { openFileHandler } from './app/config/utils/actions.js'
import { windowTemplate } from './app/templates/windowTemplate.js'

app.whenReady().then(() => {
  windowTemplate()
  openFileHandler()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
})
