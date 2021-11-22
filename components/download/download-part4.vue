<template>
  <the-part
      background-color="white"
  >
    <div
        class="
          <md:(flex-col pt-[30px] justify-start)
          justify-between pb-[60px] pt-[60px]
          bg-cover flex flex-col items-center page-content
        "
    >

      <p class="text-[35px] font-black <md:(text-[20px]) text-primary">{{ text.t1 }}</p>

      <div
          class="
            <md:(flex-col justify-start w-full)
            pt-[40px] justify-between
            flex w-[1126px]
          "
      >

        <div
            class="w-[30%] relative <md:(w-full) flex flex-col items-center mb-[30px]"
            v-for="(item, index) of steps"
            :key="index"
        >
          <div
              class="text-[40px] font-black w-[80px] h-[80px] rounded-full bg-[#F4F5F7] text-blue flex justify-center items-center">

            <!--       连接线   -->

            <img
                class="<md:(hidden) absolute h-[16px] w-[252px] left-[240px]"
                v-if="index + 1 < steps.length"
                src="/download/part3/joint-line.png"
            />

            <!--       连接线结束   -->

            {{ index + 1 }}
          </div>
          <p class="text-[#18191F] text-[24px] leading-[30px] <md:(text-[24px] leading-[30px]) pt-[16px] font-medium">
            {{ item.label }}</p>
          <p class="text-secondary text-center pt-[16px] text-[16px] leading-[26px]">{{ item.description }}</p>
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
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Ready to trade?",
      t2: "Open an account"
    })

    const steps = reactive([
      {
        label: "Open an account",
        description: "Register as a Swisstrade member, log in or consult customer service ",
      },
      {
        label: "Choose financial products",
        description: "Choose the financial products you want to invest in according to your needs ",
      },
      {
        label: "Invest Now",
        description: "Click the \"Invest Now\" button to start your financial management",
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

