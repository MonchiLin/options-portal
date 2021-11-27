<template>
  <nuxt-layout name="layout">
    <Html>
    <Head>
      <Title>Product</Title>
    </Head>
    </Html>

    <the-header :siteInfo="siteInfo"/>
    <main class="flex flex-col w-full">
      <products-part1/>
      <products-part2/>
      <products-part3 :siteInfo="siteInfo"/>
      <products-part4/>
      <products-part5/>
      <products-part6/>
      <products-part7/>
      <products-part8 :siteInfo="siteInfo"/>
    </main>
    <the-footer :siteInfo="siteInfo"/>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import ProductsPart1 from "~/components/products/products-part1.vue";
import ProductsPart2 from "~/components/products/products-part2.vue";
import { useMeta } from "#meta";
import { publicMethod } from "~/utils/shared";
import ProductsPart3 from "~/components/products/products-part3.vue";
import ProductsPart4 from "~/components/products/products-part4.vue";
import ProductsPart5 from "~/components/products/products-part5.vue";
import ProductsPart6 from "~/components/products/products-part6.vue";
import ProductsPart7 from "~/components/products/products-part7.vue";
import ProductsPart8 from "~/components/products/products-part8.vue";

export default defineComponent({
  components: {
    ProductsPart8,
    ProductsPart7,
    ProductsPart6,
    ProductsPart5,
    ProductsPart4,
    ProductsPart3,
    ProductsPart1,
    ProductsPart2,
    TheFooter,
    TheHeader
  },
  async setup() {
    const siteInfo = await publicMethod.getSiteInfo();
    return {siteInfo};
  },
})

</script>
