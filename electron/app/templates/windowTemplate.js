import { BrowserWindow } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const windowTemplate = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    frame: false,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, '../config/preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  if (process.env.APP_MODE === 'dev') {
    win.loadURL('http://localhost:5173')
    win.webContents.openDevTools()
  } else {
    win.loadFile(path.join(__dirname, '../../../dist/index.html'))
    win.webContents.openDevTools()
  }
}
