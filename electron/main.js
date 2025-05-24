import { app, BrowserWindow } from 'electron'
import { openFileDialog, sendRenderPage } from './app/config/utils/actions.js'
import { windowTemplate } from './app/templates/windowTemplate.js'

app.whenReady().then(() => {
  windowTemplate()
  openFileDialog()
  sendRenderPage()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
})
