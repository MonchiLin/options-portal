<template>
  <nuxt-layout name="layout">
    <the-header/>
    <main class="flex flex-col w-full">
      <company-groupstructure-part1/>
      <company-groupstructure-part2/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import CompanyGroupstructurePart2 from "~/components/company/groupstructure/company-groupstructure-part2.vue";
import CompanyGroupstructurePart1 from "~/components/company/groupstructure/company-groupstructure-part1.vue";

export default defineComponent({
  components: {
    CompanyGroupstructurePart1,
    CompanyGroupstructurePart2,
    TheFooter,
    TheHeader
  },
  setup() {

    return {

    }
  }
})

</script>
