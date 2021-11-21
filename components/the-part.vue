<template>
  <section
      :style="{backgroundImage: `url(${mq.mobile ? backgroundForMd : background})`, backgroundColor:backgroundColor}"
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
    backgroundColor: {
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

