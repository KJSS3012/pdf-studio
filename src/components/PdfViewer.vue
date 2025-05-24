<script setup>
import { ref, onMounted } from 'vue'
import * as PDFJS from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker?url'
import { usePdfStore } from '@/stores/pdf'

PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker

const canvasRef = ref(null)
let pdfDoc
const pdfStore = usePdfStore()

onMounted(() => {
  window.electronAPI.updatePageHandle(async () => {
    await loadPdf()
  })
})

const renderPage = async () => {
  const page = await pdfDoc.getPage(pdfStore.currentPage)
  const viewport = page.getViewport({ scale: pdfStore.scale })

  const canvas = canvasRef.value
  const context = canvas.getContext('2d')

  canvas.height = viewport.height
  canvas.width = viewport.width

  await page.render({
    canvasContext: context,
    viewport: viewport,
  }).promise
}

const loadPdf = async () => {
  try {
    const loadingTask = PDFJS.getDocument(pdfStore.path)
    pdfDoc = await loadingTask.promise
    pdfStore.setTotalPages(pdfDoc.numPages)
    await renderPage()
  } catch (error) {
    console.error('Erro ao carregar PDF:', error)
  }
}
</script>

<template>
  <canvas ref="canvasRef" id="pdf-canvas" class="pdf-canvas"></canvas>
</template>

<style scoped></style>
