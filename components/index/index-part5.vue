<template>
  <the-part
      background-for-md="/index/part5/background_mobile.png"
      background="/index/part5/background.png"
  >
    <div
        class="
          <md:(h-auto py-[23px])
          h-[900px] py-[30px]
          flex items-center page-content flex-col
        "
    >

      <p class="<md:(text-[20px]) text-[35px] font-black text-white">
        {{ text.t1 }}
      </p>

      <p class="<md:(text-[14px]) text-[18px] pt-[18px] text-white">
        {{ text.t2 }}
      </p>

      <part5-card-box class="mt-[30px]" :configs="cardData"/>

      <pagintion class="mt-[20px]" v-model:page-index="paging.pageIndex" :page-total="paging.pageTotal"/>
    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import Part5Card from "~/components/index/part5/part5-card.vue";
import Part5CardBox from "~/components/index/part5/part5-card-box.vue";
import Pagintion from "~/components/pagintion.vue";
// import { ElCarousel, ElCarouselItem } from "element-plus/lib/components/carousel";

export default defineComponent({
  components: {
    Pagintion,
    Part5CardBox,
    Part5Card,
    ThePart
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Popular financial products",
      t2: "Partners for wealth creation",
    })

    const cardData = [
      {
        "annualEarnings": 108,
        t1: "Annual earnings 108.00%+",
        t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
        descriptions: [
            "Free experience",
            "Experience period of funds: 4 days",
            "Buy today, pay tomorrow (first profit)",
            "All revenue goes to the user"
        ]
      }, {
        "annualEarnings": 84,
        t1: "Annual earnings 108.00%+",
        t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
        descriptions: [
            "Start at Rs 30,000",
            "The lockup period is 1 month",
            "Buy today, pay tomorrow (first profit)",
            "Risk type: Low risk"
        ]
      }, {
        "annualEarnings": 48,
        t1: "Annual earnings 108.00%+",
        t2: "Flexible financial management, suitable for users who like to invest in a short period of time, and can end orders in their positions at any time!",
        descriptions: [
            "Start at Rs 1,000",
            "The lockup period is 1 month",
            "Buy today, pay tomorrow (first profit)",
            "Risk type: Low risk"
        ]
      },
      {
        "annualEarnings": 108,
        t1: "Annual earnings 108.00%+",
        t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
        descriptions: [
          "Free experience",
          "Experience period of funds: 4 days",
          "Buy today, pay tomorrow (first profit)",
          "All revenue goes to the user"
        ]
      },
      {
        "annualEarnings": 108,
        t1: "Annual earnings 108.00%+",
        t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
        descriptions: [
          "Free experience",
          "Experience period of funds: 4 days",
          "Buy today, pay tomorrow (first profit)",
          "All revenue goes to the user"
        ]
      },
    ]

    const paging = reactive({
      pageIndex: 1,
      pageTotal: 4
    })

    return {
      mq,
      text,
      cardData,
      paging
    }
  }
})

</script>

<style lang="scss">

</style>

