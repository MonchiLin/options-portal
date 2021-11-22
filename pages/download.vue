<template>
  <Html>
  <Head>
    <Title>QIQUAN-Download</Title>
  </Head>
  </Html>
  <nuxt-layout name="layout">
    <the-header/>
    <main class="flex flex-col w-full">
      <download-part1/>
      <download-part2/>
      <download-part3/>
      <download-part4/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
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
  setup() {

    return {

    }
  }
})

</script>
