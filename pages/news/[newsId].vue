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
      <NewsDetailsPart/>
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { publicMethod } from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import NewsPart1 from "~/components/news/news-part1.vue";
import NewsDetailsPart from "~/components/news/newsDetails-part.vue";
import { useRoute } from "vue-router";
import { ApiWrap, BASE_URL } from "~/utils/shared";
import { useFetch } from "#app";
import cloneDeep from "lodash-es/cloneDeep";

export default defineComponent({
  components: {
    NewsPart1,
    NewsDetailsPart,
    TheFooter,
    TheHeader
  },
   async setup() {
    const siteInfo = await publicMethod.getSiteInfo();
    return {siteInfo};
  },
})

</script>
