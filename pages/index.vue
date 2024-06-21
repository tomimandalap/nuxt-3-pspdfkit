<script setup lang="ts">
let pdfFile = ref<string>("/blank.pdf");

const handleLoaded = (instance: any) => {
  console.log("PSPDFKit has loaded: ", instance);
};

const refInput = ref<HTMLInputElement | null>(null);
const handleReset = () => {
  let input = refInput.value;
  if (input) {
    input.value = "";
    pdfFile.value = "/blank.pdf";
  }
};

const openDocument = (event: any) => {
  if (pdfFile.value && pdfFile.value.startsWith("blob:")) {
    window.URL.revokeObjectURL(pdfFile.value);
  }
  pdfFile.value = window.URL.createObjectURL(event.target.files[0]);
};
</script>

<template>
  <div id="app">
    <label for="file-upload" class="custom-file-upload"> Open PDF </label>
    <input
      ref="refInput"
      id="file-upload"
      type="file"
      @change="openDocument"
      class="btn"
    />

    <UButton v-if="!pdfFile.includes('blank')" class="ms-2" @click="handleReset"
      >Reset</UButton
    >

    <PSPDFKitContainer :pdfFile="pdfFile" @loaded="handleLoaded" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

input[type="file"] {
  display: none;
}

.custom-file-upload {
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background: #4a8fed;
  padding: 10px;
  color: #fff;
  font: inherit;
  font-size: 16px;
  font-weight: bold;
}
</style>
