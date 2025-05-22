import { defineStore } from 'pinia'

export const usePdfStore = defineStore('pdf-store', {
  state: () => ({
    path: null,
    pdfDoc: null,
  }),
  actions: {
    setPath(path: any) {
      this.path = path
    },
  },
})
