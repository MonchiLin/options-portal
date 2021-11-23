<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>QIQUAN-Company-Contract-US</Title>
    </Head>
    </Html>
    <the-header/>
    <main class="flex flex-col w-full">
      <company-contractus-part1/>
      <company-contractus-part2/>
      <company-contractus-part3/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
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
  setup() {

    return {

    }
  }
})

</script>
