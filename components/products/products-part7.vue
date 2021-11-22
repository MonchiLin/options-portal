<template>
  <the-part
      background-color="#FAFAFA"
  >
    <div
        class="
          <md:(flex-col pb-[14px] pt-[20px] h-auto justify-start)
          justify-between pb-[38px] pt-[60px]
          bg-cover flex items-center page-content
        "
    >

      <div
          class="
          <md:(pt-[30px] justify-start px-[20px] ml-0)
          ml-[47px]
          flex flex-col justify-evenly
        ">

        <h6 class="text-primary text-[35px] leading-[48px] font-black <md:(text-[20px] leading-[20px])">{{ text.t1 }}</h6>
        <h5 class="whitespace-pre-line pt-[30px] text-[#18191F] text-[18px] leading-[32px] <md:(text-[14px] leading-[20px])">{{ text.t2 }}</h5>

      </div>

      <img
          src="/products/part7/phone.png"
          class="
          <md:(mt-[38px] w-full h-auto)
          w-[509px] h-auto
        "
          alt=""
      >

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
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Advantages of documentary financial management",
      t2: "Save time\n" +
          "Trading is a time-consuming task for all investors. Your copy investment in steadyoption becomes easy, and professional people will do it for you. This will save you a lot of time.\n" +
          "\n" +
          "Enter a diversified market\n" +
          "No one is an expert in all markets and assets. Our experienced traders focus on extremely special markets and have become trading experts. Buying Steadyoption's documentary financial products allows you to enter these markets.\n" +
          "\n" +
          "Reduce risk\n" +
          "Letting professional people trade is much less risky than trying to trade on your own. If you purchase Steadyoption’s documentary financial products, there will be a professional team managing and investing for you"
    })

    return {
      mq,
      text
    }
  }
})

</script>

<style lang="scss">


</style>

