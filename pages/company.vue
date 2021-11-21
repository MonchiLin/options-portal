<template>
  <nuxt-layout name="layout">
    <the-header/>
    <main class="flex flex-col w-full">
      <company-aboutus-part1/>
      <company-aboutus-part2/>
      <company-aboutus-part3/>
      <company-aboutus-part4/>
      <company-aboutus-part5/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import CompanyAboutusPart1 from "~/components/company/aboutus/company-aboutus-part1.vue";
import CompanyAboutusPart2 from "~/components/company/aboutus/company-aboutus-part2.vue";
import CompanyAboutusPart3 from "~/components/company/aboutus/company-aboutus-part3.vue";
import CompanyAboutusPart4 from "~/components/company/aboutus/company-aboutus-part4.vue";
import CompanyAboutusPart5 from "~/components/company/aboutus/company-aboutus-part5.vue";

export default defineComponent({
  components: {
    CompanyAboutusPart5,
    CompanyAboutusPart4,
    CompanyAboutusPart3,
    CompanyAboutusPart2,
    CompanyAboutusPart1,
    TheFooter,
    TheHeader
  },
  setup() {

    return {

    }
  }
})

</script>
