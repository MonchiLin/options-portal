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
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import NewsPart1 from "~/components/news/news-part1.vue";
import NewsDetailsPart from "~/components/news/newsDetails-part.vue";

export default defineComponent({
  components: {
    NewsPart1,
    NewsDetailsPart,
    TheFooter,
    TheHeader
  },
  setup() {

    return {

    }
  }
})

</script>
