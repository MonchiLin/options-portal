<template>
  <div :style="{ backgroundColor: outerColor }" class="rounded-full w-[18px] h-[18px] relative flex items-center justify-center">
    <div :style="{ backgroundColor: innerColor }" class="rounded-full w-[8px] h-[8px]"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    outerColor: {
      type: String,
      default: "#e1ecfe"
    },
    innerColor: {
      type: String,
      default: "#217BF4"
    },
  },
  setup() {
    return {}
  }
})

</script>
