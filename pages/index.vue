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

const handleOpenFile = () => {
  refInput.value?.click();
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
    <nav class="py-5 flex justify-between items-center px-5">
      <h3 class="text-white text-xl">PSPDFkit Nuxt 3</h3>

      <div>
        <input
          ref="refInput"
          id="file-upload"
          type="file"
          class="hidden"
          @change="openDocument"
        />

        <template v-if="pdfFile.includes('blank')">
          <UButton size="lg" class="ms-2" @click="handleOpenFile"
            >Open File</UButton
          >
        </template>
        <template v-else>
          <UButton size="lg" variant="outline" class="ms-2" @click="handleReset"
            >Reset</UButton
          >
        </template>
      </div>
    </nav>

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
