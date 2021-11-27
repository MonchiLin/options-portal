<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>Privacy Policy</Title>
    </Head>
    </Html>
    <the-header :siteInfo="siteInfo"/>
    <main class="flex flex-col w-full">
      <privacypolicy-part-1 :siteInfo="siteInfo"/>
      <privacypolicy-part-2 :siteInfo="siteInfo"/>
      
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery,publicMethod} from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import PrivacypolicyPart1 from "~/components/privacypolicy/privacypolicy-part1.vue";
import PrivacypolicyPart2 from "~/components/privacypolicy/privacypolicy-part2.vue";
import { onMounted } from "vue";

export default defineComponent({
  components: {
    PrivacypolicyPart1,PrivacypolicyPart2,TheFooter, TheHeader},
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
