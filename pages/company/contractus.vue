<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>Company-Contract-US</Title>
    </Head>
    </Html>
    <the-header :siteInfo="siteInfo"/>
    <main class="flex flex-col w-full">
      <company-contractus-part1/>
      <company-contractus-part2 :siteInfo="siteInfo"/>
      <company-contractus-part3/>
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import { publicMethod } from "~/utils/shared";
import CompanyContractusPart1 from "~/components/company/contractus/company-contractus-part1.vue";
import CompanyContractusPart2 from "~/components/company/contractus/company-contractus-part2.vue";
import CompanyContractusPart3 from "~/components/company/contractus/company-contractus-part3.vue";

export default defineComponent({
  components: {
    CompanyContractusPart1,
    CompanyContractusPart2,
    CompanyContractusPart3,
    TheFooter,
    TheHeader
  },
  async setup() {
    const siteInfo = await publicMethod.getSiteInfo();
    return {siteInfo};
  },
})

</script>
