<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>Terms of service</Title>
    </Head>
    </Html>
    <the-header :siteInfo="siteInfo"/>
    <main class="flex flex-col w-full">
      <termsofservice-part-1 :siteInfo="siteInfo"/>
      <termsofservice-part-2 :siteInfo="siteInfo"/>
      
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery,publicMethod} from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import TermsofservicePart1 from "~/components/termsofservice/termsofservice-part1.vue";
import TermsofservicePart2 from "~/components/termsofservice/termsofservice-part2.vue";
import { onMounted } from "vue";

export default defineComponent({
  components: {
    TermsofservicePart1,TermsofservicePart2,TheFooter, TheHeader},
 async setup() {
    const mq = useMediaQuery()
    const siteInfo=await publicMethod.getSiteInfo()
    return {
      siteInfo,
      mq
    }
  }
})

</script>
