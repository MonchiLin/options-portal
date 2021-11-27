<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>News</Title>
    </Head>
    </Html>
    <the-header :siteInfo="siteInfo"/>
    <main class="flex flex-col w-full">
      <news-part1/>
      <news-part2/>
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { publicMethod } from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import NewsPart1 from "~/components/news/news-part1.vue";
import NewsPart2 from "~/components/news/news-part2.vue";

export default defineComponent({
  components: {
    NewsPart2,
    NewsPart1,
    TheFooter,
    TheHeader
  },
   async setup() {
    const siteInfo = await publicMethod.getSiteInfo();
    return {siteInfo};
  },
})

</script>
