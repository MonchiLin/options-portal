<template>
  <the-part
      background="/company/aboutus/part6/bg.png"
      background-for-md="/company/aboutus/part6/bg_m.png"
  >
    <div
        class="
          <md:(h-auto pt-[27px] pb-[22px] h-[1873px])
          pb-[60px] pt-[60px] h-[890px]
          flex items-center page-content flex-col text-white
        "
    >

      <h3 class="text-[35px] <md:(text:[20px]) font-black">{{ text.t1 }}</h3>

      <div
          class="
            <md:(flex-col)
            flex-row
            w-full flex justify-between mt-[30px]
          "
      >
        <div
            class="<md:(w-full mt-[30px]) flex flex-col w-[30%] items-center text-center relative"
            v-for="(item, index) of cardData"
            :key="index"
        >
          <p class="text-[72px] opacity-10 font-black">{{ item.year }}</p>
          <p class="relative top-[-26px] text-[18px]">{{ item.title }}</p>
          <p class="whitespace-pre-line">{{ item.description }}</p>
        </div>
      </div>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive, ref } from "vue";
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
    ThePart,
    // ElCarousel,
    // ElCarouselItem
  },
  props: {
    siteInfo: Object
  },
  setup(props) {
    const siteInfo=props.siteInfo
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Our future plans",
    })

    const cardData = [
      {
        year: "2021",
        title: "Annual Plan",
        description: "In February,the "+siteInfo.siteName+" Global Launch Conference was held in Vancouver to announce the official launch into the Asian market.Thank you for your quality customers and excellent employees,and invite quality guests to participate in the annual "+siteInfo.siteName+" Event. \n \n As the "+siteInfo.siteName+"Group's global user capacity continues to grow,the company will offer better rewards to outstanding traders and clients,with more talented people to provide customers with a richer and more diversified investment strategy.",
      },
      {
        year: "2022",
        title: "Annual Plan",
        description: siteInfo.siteName+" Group not only specializes in foreign exchange,in the future, if it finds outstanding enterprises in other areas of investment landmarks, does not rule out the establishment of new trading teams or corporate cooperation, so that investors in other areas can also get a sound and sound investment strategy,diversified investment options can also attract more investors' attention. \n \n Participating in the regional financial fairs, so that more investors can see the strength of the "+siteInfo.siteName+" Group,while the exhibitors with the enterprises to communicate,to provide customers with better service quality. After the global outbreak control,the company will plan to hold a grand awards and commendation conference in the United Kingdom,and invite members to visit the "+siteInfo.siteName+" Group Canada-UK National Transport headquarters",
      },
      {
        year: "2023",
        title: "Annual Plan",
        description: "In the future,we will cooperate with the company's global exchange market development map, in addition to the UK headquarters,we will be in the global market development of excellent countries to set up new offices to serve the vast number of "+siteInfo.siteName+" group customers around the world. \n \n At the end of 2023,the "+siteInfo.siteName+" Group will hold a grand annual meeting and commendation conference in Dubai,the company 's senior management will attend this grand annual dubai commendation conference, in a luxurious country to enjoy the glory brought to us by the "+siteInfo.siteName+" Group,the time to invite the world's outstanding leaders to celebrate.",
      },

    ]

    return {
      mq,
      text,
      cardData,
    }
  }
})

</script>

<style lang="scss">

</style>

