<template>
  <nuxt-layout name="layout">
<!--    <the-header/>-->
    <main class="flex flex-col w-full">
<!--      <index-part1/>-->
<!--      <index-part2/>-->
<!--      <index-part3/>-->
<!--      <index-part4/>-->
      <index-part5/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import IndexPart1 from "~/components/index/index-part1.vue";
import IndexPart2 from "~/components/index/index-part2.vue";
import IndexPart3 from "~/components/index/index-part3.vue";
import IndexPart4 from "~/components/index/index-part4.vue";
import IndexPart5 from "~/components/index/index-part5.vue";

export default defineComponent({
  components: {IndexPart5, IndexPart4, IndexPart3, IndexPart2, IndexPart1, TheFooter, TheHeader},
  setup() {
    const mq = useMediaQuery()

    return {
      mq
    }
  }
})

</script>
