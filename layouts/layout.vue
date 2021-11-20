<template>
  <div class="flex-col items-center w-screen min-h-screen">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";

export default defineComponent({
  setup() {
    const mq = useMediaQuery()

    return {
      mq
    }
  }
})

</script>
