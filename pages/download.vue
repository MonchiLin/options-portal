<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>Download</Title>
    </Head>
    </Html>
    <the-header :siteInfo="siteInfo"/>
    <main class="flex flex-col w-full">
      <download-part1 :siteInfo="siteInfo"/>
      <download-part2 :siteInfo="siteInfo"/>
      <download-part3 />
      <download-part4 :siteInfo="siteInfo"/>
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import { publicMethod } from "~/utils/shared";
import DownloadPart1 from "~/components/download/download-part1.vue";
import DownloadPart2 from "~/components/download/download-part2.vue";
import DownloadPart3 from "~/components/download/download-part3.vue";
import DownloadPart4 from "~/components/download/download-part4.vue";

export default defineComponent({
  components: {
    DownloadPart4,
    DownloadPart3,
    DownloadPart1,
    DownloadPart2,
    TheFooter,
    TheHeader
  },
  async setup() {
    const siteInfo = await publicMethod.getSiteInfo();
    return {siteInfo};
  },
})

</script>
