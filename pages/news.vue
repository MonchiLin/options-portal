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
      <news-part2/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  setup() {

    return {

    }
  }
})

</script>
