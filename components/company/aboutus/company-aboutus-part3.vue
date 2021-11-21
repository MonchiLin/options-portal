<template>
  <the-part>
    <div
        class="
          <md:(flex-col pb-[30px] h-auto pb-[30px])
          flex-row pb-[52px]
          flex items-center justify-center page-content bg-white
        "
    >
     <div class="flex flex-col w-[50%] <md:(w-full)">
       <p class="font-black text-[35px] <md:(text-[20px])">
         {{ text.t1 }}
       </p>
       <p class="mt-[20px] text-[16px] leading-[28px] <md:(text-[14px] leading-[20px])">
         {{ text.t2 }}
       </p>
     </div>
     <div class="ml-[42px] flex flex-row w-[50%] justify-between items-center <md:(w-full mt-[30px] ml-0)">
       <img :src="images.i1" class="w-[281px] h-[422px] rounded-[6px] <md:(w-[40%] h-[200px])"/>
       <div class="flex flex-col ml-[20px] <md:(ml-0)">
         <img class="w-[290px] h-[255px] rounded-[6px] <md:(w-[100%] h-[140px])" :src="images.i2" alt="">
         <img class="mt-[20px] w-[290px] h-[255px] rounded-[6px] <md:(w-[100%] h-[140px])" :src="images.i3" alt="">
       </div>
     </div>
    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import isNil from 'lodash-es/isNil'

export default defineComponent({
  components: {
    ThePart,
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Who We Are?",
      t2: "A leading Indian investment services company, Steadyoption has presence across UK and india,Sydney, Switzerland, London, Dubai, Hong Kong, Vietnam and Thailand. A rich heritage of providing effective financial solutions has made us a trusted partner of over a million people. We provide a wide array of products and services such as distribution of mutual funds & insurance, equity and derivatives, commodity, PMS and financial planning. Along with traditional offerings, we have built a comprehensive portfolio of digital products and services. Our multi-channel distribution network comprising of branches, online portal, dedicated customer care and phone service caters to all the investment needs of the clients ",
    })

    const images = reactive({
      i1: "/company/aboutus/part3/Image.png",
      i2: "/company/aboutus/part3/Image-1.png",
      i3: "/company/aboutus/part3/Image-2.png",
    })

    return {
      images,
      mq,
      text,
    }
  }
})

</script>

<style lang="scss">

</style>

