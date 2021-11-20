<template>
  <section
      :style="{backgroundImage: mq.mobile ? backgroundForMd : background}"
      class="bg-cover w-screen flex flex-col items-center"
  >
    <slot/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";

export default defineComponent({
  props: {
    backgroundForMd: {
      type: String,
      required: false
    },
    background: {
      type: String,
      required: false
    },
  },
  setup() {
    const mq = useMediaQuery()

    return {
      mq
    }
  }
})

</script>

<style lang="scss">


</style>

