<template>
  <the-part
      background-color="#252B42"
  >
    <div
        class="
          <md:(h-[675px])
          h-[761px] py-[60px]
          flex items-center page-content flex-col
        "
    >

      <tab-bar :items="tabItems" v-model:index="tabIndex"/>

      <div
          :style="{ backgroundImage: `url(${mq.mobile ? tabDetail.bgM : tabDetail.bg})` }"
          class="
            <md:(w-full h-[529px])
            w-[1110px] h-[529px]  mt-[50px]
            bg-cover flex items-end
          "
      >
        <div
            class="h-[163px] <md:(min-h-[50%] h-auto py-[10px] px-[20px]) w-full flex items-center justify-center px-[90px]"
            style="background-color: rgba(0, 0, 0, 0.5);"
        >
          <p class="text-[16px] leading-[24px] <md:(leading-[22px]) text-white">{{ tabDetail.description }}</p>
        </div>

      </div>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { computed, reactive, ref } from "vue";
import ThePart from "~/components/the-part.vue";
import TabBar from "~/components/tab-bar.vue";

export default defineComponent({
  components: {
    TabBar,
    ThePart
  },props: {
    siteInfo: Object
  },
  setup(props) {
    const siteInfo=props.siteInfo
    const mq = useMediaQuery()
    const tabIndex = ref(0)
    const tabItems = reactive([
      "Technology",
      "Team",
      "Transparent",
      "Trust",
    ])

    const tabDetails = reactive([
      {
        description: "Today, technology is one of the most important elements of investment and finance. We know that this is why we continue to improve our advanced technology based on the latest trends and solutions. Our goal is to make "+siteInfo.siteName+" the most reliable and popular investment and wealth management platform in the market. \n",
        bg: "/company/aboutus/part4/bg1.png",
        bgM: "/company/aboutus/part4/bg1_m.png",
      },
      {
        description: "Founded by traders with more than 30 years of experience, the company manages foreign exchange transactions at major India banks such as Prudential Financial, State Bank of India and Reserve Bank of India.",
        bg: "/company/aboutus/part4/bg2.png",
        bgM: "/company/aboutus/part4/bg2_m.png",
      },
      {
        description: siteInfo.siteName+" provides advanced and efficient technical services and a stable investment and financial management trading platform. Servers are located on four continents, and Verisign is a global network security partner. The gateway uses advanced encryption technology up to 256 bits. Let each customer customize trading strategies in real time and view transaction records in real time. ",
        bg: "/company/aboutus/part4/bg3.png",
        bgM: "/company/aboutus/part4/bg3_m.png",
      },
      {
        description: "Professional and dedicated, serving more than 30,000 individual and institutional clients worldwide, with a notorious reputation. "+siteInfo.siteName.toUpperCase()+" TRADE FINANCE is a registered brand for England and Wales. ",
        bg: "/company/aboutus/part4/bg4.png",
        bgM: "/company/aboutus/part4/bg4_m.png",
      },
    ])

    const tabDetail = computed(() => tabDetails[tabIndex.value])

    return {
      mq,
      tabIndex,
      tabDetail,
      tabItems,
      tabDetails,
    }
  }
})

</script>

<style lang="scss">

</style>

