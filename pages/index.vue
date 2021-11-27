<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>Home</Title>
    </Head>
    </Html>
    <the-header :siteInfo="siteInfo"/>
    <main class="flex flex-col w-full">
      <index-part1 :siteInfo="siteInfo"/>
      <index-part2 :siteInfo="siteInfo"/>
      <index-part3 :siteInfo="siteInfo"/>
      <index-part4 :siteInfo="siteInfo"/>
      <index-part5 :siteInfo="siteInfo"/>
      <index-part6 :siteInfo="siteInfo"/>
      <index-part7 :siteInfo="siteInfo"/>
      <index-part8 :siteInfo="siteInfo"/>
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery,publicMethod} from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import IndexPart1 from "~/components/index/index-part1.vue";
import IndexPart2 from "~/components/index/index-part2.vue";
import IndexPart3 from "~/components/index/index-part3.vue";
import IndexPart4 from "~/components/index/index-part4.vue";
import IndexPart5 from "~/components/index/index-part5.vue";
import IndexPart6 from "~/components/index/index-part6.vue";
import IndexPart7 from "~/components/index/index-part7.vue";
import IndexPart8 from "~/components/index/index-part8.vue";
import { onMounted } from "vue";

export default defineComponent({
  components: {
    IndexPart8,
    IndexPart7, IndexPart6, IndexPart5, IndexPart4, IndexPart3, IndexPart2, IndexPart1, TheFooter, TheHeader},
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
