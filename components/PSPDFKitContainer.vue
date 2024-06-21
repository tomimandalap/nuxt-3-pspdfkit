<script setup lang="ts">
const props = defineProps({
  pdfFile: {
    type: String,
    required: true,
  },
});

const emits = defineEmits<{
  (event: "loaded", value: any): void;
}>();

const config = useRuntimeConfig();

const loadPSPDFKit = async () => {
  import("pspdfkit")
    .then((PSPDFKit: any) => {
      PSPDFKit.unload(".pdf-container");
      return PSPDFKit.load({
        document: props.pdfFile,
        container: ".pdf-container",
        baseUrl: "http://localhost:3000/",
        licenseKey: config.public.pspdfKey,
      });
    })
    .catch((error) => {
      console.error("PDF Error", error);
    });
};

watch(
  () => props.pdfFile,
  (newValue) => {
    if (newValue) loadPSPDFKit();
  }
);

onMounted(() => {
  loadPSPDFKit().then((instance) => {
    emits("loaded", instance);
  });
});
</script>

<template>
  <div class="pdf-container" />
</template>

<style scoped>
.pdf-container {
  height: 100vh;
}
</style>
