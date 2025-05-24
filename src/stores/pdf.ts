import { defineStore } from 'pinia'

export const usePdfStore = defineStore('pdf-store', {
  state: () => ({
    path: '',
    totalPages: 0,
    currentPage: 1,
    scale: 1,
  }),
  actions: {
    setPath(path: any) {
      this.path = path
    },
    setTotalPages(totalPages: any) {
      this.totalPages = totalPages
    },
    setCurrentPage(currentPage: any) {
      this.currentPage = currentPage
    },
    setScale(scale: any) {
      this.scale = scale
    },
  }
})
