<template>
  <nuxt-layout name="layout">
    <the-header/>
    <main class="flex flex-col w-full">
      <products-part1/>
      <products-part2/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import ProductsPart1 from "~/components/products/products-part1.vue";
import ProductsPart2 from "~/components/products/products-part2.vue";

export default defineComponent({
  components: {
    ProductsPart1,
    ProductsPart2,
    TheFooter,
    TheHeader
  },
  setup() {

    return {

    }
  }
})

</script>
