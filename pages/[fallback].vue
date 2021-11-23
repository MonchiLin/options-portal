<template>
  <the-part
      background="/fallback/bg.png"
      background-for-md="/fallback/bg_m.png"
      class="h-screen bg-center"
  >
    <Toast/>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ThePart from "~/components/the-part.vue";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import { onMounted } from "vue";


export default defineComponent({
  components: {ThePart, Toast},
  setup() {
    const toast = useToast();
    onMounted(() => {
      toast.add({
        severity: 'warn',
        summary: 'Not Found',
        detail: 'Coming back to home page...',
        life: 3000,
      });

      setTimeout(() => {
        location.href = '/'
      }, 2500)

    })

    return {}
  }
})

</script>