<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>QIQUAN-Company-FAQ</Title>
    </Head>
    </Html>
    <the-header/>
    <main class="flex flex-col w-full">
      <company-faq-part1/>
      <company-faq-part2/>
      <company-faq-part3/>
      <company-faq-part4/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import CompanyFaqPart1 from "~/components/company/faq/company-faq-part1.vue";
import CompanyFaqPart2 from "~/components/company/faq/company-faq-part2.vue";
import CompanyFaqPart3 from "~/components/company/faq/company-faq-part3.vue";
import CompanyFaqPart4 from "~/components/company/faq/company-faq-part4.vue";

export default defineComponent({
  components: {
    CompanyFaqPart1,
    CompanyFaqPart2,
    CompanyFaqPart3,
    CompanyFaqPart4,
    TheFooter,
    TheHeader
  },
  setup() {

    return {

    }
  }
})

</script>
