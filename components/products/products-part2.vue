<template>
  <the-part
      background-color="white"
  >
    <div
        class="
          <md:(flex-col pb-[30px] pt-[30px])
          pt-[67px] pb-[60px]
          bg-cover flex flex-col page-content text-primary
        "
    >
      <h3 class="text-[35px] <md:(text-[20px] leading-[20px]) font-black">{{ text.t1 }}</h3>
      <h4 class="pt-[30px] text-[18px] leading-[32px] <md:(text-[14px leading-[20px]])">{{ text.t2 }}</h4>

      <div class="<md:(flex-col pt-[30px]) flex flex-row pt-[60px] items-end relative">
        <div class="flex flex-col">

          <h3 class="text-[35px] <md:(text-[20px] leading-[20px]) font-black">{{ text.t3 }}</h3>
          <h4 class="pt-[22px] pb-[30px] text-[18px] leading-[32px] <md:(text-[14px] leading-[20px])">{{ text.t4 }}</h4>

        </div>

        <img
            src="/products/part2/person.png"
            class="
              <md:(absolute w-[45%] h-auto ml-0 right-0 opacity-40 bottom-0)
              w-[345px] h-[476px] ml-[134px]
            "
            alt=""
        >
      </div>
      <img
          src="/products/part2/trading.png"
          class="w-full"
          alt=""
      />

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
      t1: "About documentary financial management",
      t2: "Steadyoption's documentary financial management has changed the rules of the game in the industry.\n" +
          "Customers only need to purchase documentary financial products, and top traders perform transaction operations. This allows anyone to purchase documentary financial management to trade like top traders.",
      t3: "With a single financial",
      t4: "Documentary financial management is to follow the traders to complete their own investments. Every investment operation performed by traders is cautious, and their teams cooperate with each other to collect and provide the latest market trends and data, so that every transaction is full of confidence!\n" +
          "\n" +
          "Whether you are an investment beginner or an investment enthusiast who has no time to observe the market, you can now use the expertise of the SteadyOption platform traders to profit. On the SteadyOption platform, by purchasing documentary financial products, the system will automatically follow the operations of top traders based on the documentary financial products you purchase, and use the experience and data of top traders to help you make money.",
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

