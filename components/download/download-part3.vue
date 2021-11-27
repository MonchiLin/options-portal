<template>
  <the-part
      background-for-md="/download/part3/bg_m.png"
      background="/download/part3/bg.png"
  >
    <div
        class="
          <md:(flex-col pt-[30px] justify-start)
          justify-between pb-[30px] pt-[60px]
          bg-cover flex flex-col items-center page-content text-white
        "
    >

      <p class="text-[35px] font-black <md:(text-[20px])">{{ text.t1 }}</p>
      <p class="text-center pt-[10px] text-[18px] leading-[32px] <md:(text-[14px] leading-[20px])">{{ text.t2 }}</p>

      <div
          class="
            <md:(flex-col justify-start pt-[30px])
            justify-between pt-[60px] flex-shrink-0
            flex items-center flex-wrap
          "
      >

        <div
            class="w-[30%] <md:(w-full) flex flex-col items-center mb-[30px]"
            v-for="(item, index) of features"
            :key="index"
        >
          <img :src="item.icon" class="w-[32px] h-[32px]" alt="">
          <p class="text-[24px] leading-[32px] pt-[25px] font-medium">{{ item.label }}</p>
          <p class="text-center h-[110px] pt-[8px] text-[16px] leading-[26px]">{{ item.description }}</p>
        </div>

      </div>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import BluePointer from "../blue-pointer.vue";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {
    ThePart,
    BluePointer
  },props: {
    siteInfo: Object
  },
  setup(props){
    const siteInfo=props.siteInfo
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Advantages of "+siteInfo.siteName,
      t2: siteInfo.siteName+ "is a safe and formal investment and financial management platform"
    })

    const features = reactive([
      {
        label: "Global recognition",
        description: "More than 170,000 active users in 13 countries and regions around the world",
        icon: "/download/part3/Globalrecognition.png"
      },
      {
        label: "Free trial",
        description: "After opening an account in "+siteInfo.siteName+", every user will receive RS30000 experience fee for free. ",
        icon: "/download/part3/Freetrial.png"
      },
      {
        label: "Multiple choice",
        description: "Flexible and regular financial management, with different returns and cycles for you to choose",
        icon: "/download/part3/Multiplechoice.png"
      },
      {
        label: "Stable income",
        description: "Guarantee company promises to guarantee capital and financial management, investment is more assured",
        icon: "/download/part3/Globalrecognition.png"
      },
      {
        label: "World-class team",
        description: "The team was founded by traders with more than 30 years of experience, all of whom have extensive experience and knowledge of financial market investment transactions.",
        icon: "/download/part3/World-class-team.png"
      },
      {
        label: "No management fees",
        description: "At all. Even when you copy other traders and invest in portfolios",
        icon: "/download/part3/Nomanagementfees.png"
      },
    ])

    return {
      mq,
      text,
      features
    }
  }
})

</script>

<style lang="scss">


</style>

