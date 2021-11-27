<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>Company-Group-Structure</Title>
    </Head>
    </Html>
    <the-header :siteInfo="siteInfo"/>
    <main class="flex flex-col w-full">
      <company-groupstructure-part1/>
      <company-groupstructure-part2 :siteInfo="siteInfo"/>
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import { publicMethod } from "~/utils/shared";
import CompanyGroupstructurePart2 from "~/components/company/groupstructure/company-groupstructure-part2.vue";
import CompanyGroupstructurePart1 from "~/components/company/groupstructure/company-groupstructure-part1.vue";

export default defineComponent({
  components: {
    CompanyGroupstructurePart1,
    CompanyGroupstructurePart2,
    TheFooter,
    TheHeader
  },
  async setup() {
    const siteInfo = await publicMethod.getSiteInfo();
    return {siteInfo};
  },
})

</script>
