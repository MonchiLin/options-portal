<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>Cookie Policy</Title>
    </Head>
    </Html>
    <the-header :siteInfo="siteInfo"/>
    <main class="flex flex-col w-full">
      <cookiepolicy-part-1 :siteInfo="siteInfo"/>
      <cookiepolicy-part-2 :siteInfo="siteInfo"/>
      
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery,publicMethod} from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import CookiepolicyPart1 from "~/components/cookiepolicy/cookiepolicy-part1.vue";
import CookiepolicyPart2 from "~/components/cookiepolicy/cookiepolicy-part2.vue";
import { onMounted } from "vue";

export default defineComponent({
  components: {
    CookiepolicyPart1,CookiepolicyPart2,TheFooter, TheHeader},
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
