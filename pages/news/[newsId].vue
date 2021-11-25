<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>QIQUAN-News</Title>
    </Head>
    </Html>
    <the-header/>
    <main class="flex flex-col w-full">
      <news-part1/>
      <NewsDetailsPart/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
  setup() {

    return {}
  }
})

</script>
