<template>
  <the-part
      background-for-md="/company/aboutus/part5/bg.png"
      background="/company/aboutus/part5/bg_m.png"
  >
    <div
        class="
          <md:(h-[436px] <md:(pb-0))
          h-[874px] pb-[60px]
          flex items-center page-content flex-col
        "
    >

      <p class="<md:(text-[20px] pt-[30px]) pt-[57px] text-[35px] font-black">
        {{ text.t1 }}
      </p>

      <p class="<md:(text-[14px] pt-[20px] leading-[20px]) text-[18px] pt-[30px] text-center leading-[32px]">
        {{ text.t2 }}
      </p>

      <img class="mt-[30px]" :src=" mq.mobile ? '/company/aboutus/part5/map.png' : '/index/part4/map.png'" alt="">
    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {
    ThePart
  },props: {
    siteInfo: Object
  },
  setup(props) {
    const siteInfo=props.siteInfo
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Our business development",
      t2:  siteInfo.siteName+" has many years of investment experience and is the most prestigious investment and wealth management company in the India. The company is headquartered in the India and has operations in 7 countries and regions including Sydney, Switzerland, United Kingdom, London, Dubai, Hong Kong, Vietnam, and Thailand. ",
    })


    return {
      mq,
      text,
    }
  }
})

</script>

<style lang="scss">

</style>

