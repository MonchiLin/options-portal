<template>
  <Html>
    <Head>
      <Title>QIQUAN-Product</Title>
    </Head>
  </Html>

  <nuxt-layout name="layout">
    <the-header/>
    <main class="flex flex-col w-full">
      <products-part1/>
      <products-part2/>
      <products-part3/>
      <products-part4/>
      <products-part5/>
      <products-part6/>
    </main>
    <the-footer/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import ProductsPart1 from "~/components/products/products-part1.vue";
import ProductsPart2 from "~/components/products/products-part2.vue";
import { useMeta } from "#meta";
import ProductsPart3 from "~/components/products/products-part3.vue";
import ProductsPart4 from "~/components/products/products-part4.vue";
import ProductsPart5 from "~/components/products/products-part5.vue";
import ProductsPart6 from "~/components/products/products-part6.vue";

export default defineComponent({
  components: {
    ProductsPart6,
    ProductsPart5,
    ProductsPart4,
    ProductsPart3,
    ProductsPart1,
    ProductsPart2,
    TheFooter,
    TheHeader
  },
  setup() {

    return {}
  }
})

</script>
