<script setup>
import { usePdfStore } from '@/stores/pdf'

const pdfStore = usePdfStore()

async function handleFileUploud() {
  const path = await window.electronAPI.openFileDialog()
  pdfStore.setPath(path)
  window.electronAPI.updatePage()
}
</script>

<template>
  <header class="header">
    <button @click="handleFileUploud"></button>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: rgb(21, 255, 0);
}
</style>
