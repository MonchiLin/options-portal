<template>
  <the-part
      background-for-md="/index/part4/background_mobile.png"
      background="/index/part4/background.png"
  >
    <div
        class="
          <md:(h-[436px])
          h-[859px] pb-[60px]
          flex items-center page-content flex-col
        "
    >

      <p class="<md:(text-[20px]) text-[35px] font-black">
        {{ text.t1 }}
      </p>

      <p class="<md:(text-[14px]) text-[18px] pt-[18px]">
        {{ text.t2 }}
      </p>

      <p class="<md:(text-[14px] pt-[20px] leading-[20px]) text-[18px] pt-[30px] text-center leading-[32px]">
        {{ text.t3 }}
      </p>

      <img class="mt-[30px]" :src=" mq.mobile ? '/index/part4/map_mobile.png' : '/index/part4/map.png'" alt="">
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
      t1: "We have users all over the world",
      t2: "We operate in multiple markets around the world",
      t3: siteInfo.corpName+" is the most prestigious investment services company. in the India. "+siteInfo.siteName+" FINANCE is a financial services group that invests globally,It is headquartered in the India and has business in 7 countries and regions including Sydney, Switzerland, London, India, Dubai, Hong Kong, Vietnam and Thailand",
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

