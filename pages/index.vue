<template>
  <nuxt-layout name="layout">
    <the-header/>
    Index
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";

export default defineComponent({
  components: {TheFooter, TheHeader},
  setup() {
    const mq = useMediaQuery()

    return {
      mq
    }
  }
})

</script>
