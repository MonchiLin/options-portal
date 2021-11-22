<template>
  <the-part
      background-color="white"
  >
    <div
        class="
          <md:(flex-col pt-[30px])
          pb-[60px] pt-[60px]
          bg-cover flex flex-col items-center page-content
        "
    >

      <p class="text-center text-[35px] font-black <md:(text-[20px] leading-[20px]) text-primary">{{ text.t1 }}</p>
      <p class="text-center whitespace-pre-line pt-[30px] text-[18px] leading-[32px] <md:(text-[14px] leading-[20px]) text-[#18191F]">{{ text.t2 }}</p>

      <the-stpes :steps="steps">
        <template #item="{item}">
          <p class="<md:(h-auto) h-[70px] text-secondary text-center pt-[16px] text-[16px] leading-[26px]">{{ item.description }}</p>
          <img :src="item.image" class="w-full mt-[46px] <md:(mt-[16px])" alt="">
        </template>
      </the-stpes>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import BluePointer from "../blue-pointer.vue";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import TheStpes from "~/components/the-stpes.vue";

export default defineComponent({
  components: {
    TheStpes,
    ThePart,
    BluePointer
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Trader dynamics, you are in control",
      t2: "Traders will trade during the trading day, and their daily trading operations and results will be displayed in the \"Earnings record\" in the \"History\" of the platform. Customers can log in to the platform at any time to enter the \"Earnings record\" and click \"Details\" to view their daily Every copy operation and the benefits it brings.\n" +
          "\n" +
          "Each copy product has a fixed period. Three days before the end of each period, you can end the copy operation. If you do not perform the end operation, the contract will automatically enter the next period without repurchasing."
    })

    const steps = reactive([
      {
        description: "Enter“History”and click on “profit Record” to view your daily copy results and every copy operation",
        image: "/products/part4/step1.png"
      },
      {
        description: "Enter“revenueRecord”and click on “Details",
        image: "/products/part4/step2.png"
      },
      {
        description: "EnterDetails“to view your daily copy operations and the benefits they bring",
        image: "/products/part4/step3.png"
      },
    ])

    return {
      mq,
      text,
      steps
    }
  }
})

</script>

<style lang="scss">


</style>

