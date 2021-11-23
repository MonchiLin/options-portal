<template>
  <the-part
      background-color="#FAFAFA"
  >
    <div
        class="
          <md:(flex-col pb-[14px] pt-[20px] h-auto justify-start)
          pb-[50px] pt-[60px]
          bg-cover flex flex-col items-center page-content
        "
    >

      <div
          class="
          <md:(ml-0)
          mt-[40px]
          flex flex-col
        ">

        <h6 class="text-primary text-[35px] leading-[48px] font-black <md:(text-[20px] leading-[20px])">
          {{ text.t1 }}
        </h6>

        <the-stpes-style2 class="mt-[46px]" :steps="steps"/>

      </div>

      <div class="w-full px-[55px] mt-[75px] <md:(px-[0px] mt-[10px])">
        <div
            :style="{backgroundImage:  `url(${mq.mobile ? '/products/part8/readtogetstarted_m.png' : '/products/part8/readtogetstarted.png'})`}"
            class="
              <md:(mt-[38px])
              w-full h-auto bg-cover bg-no-repeat flex flex-col items-center rounded-[20px] overflow-hidden
            "
        >
          <p class="text-white text-[35px] leading-[48px] font-black pt-[60px] <md:(text-[20px] leading-[20px])">
            {{ text.cardT1 }}
          </p>
          <p class="text-white text-[18px] pt-[30px] <md:(text-[14px] leading-[17px] pt-[10px])">
            {{ text.cardT2 }}
          </p>

          <div class="flex flex-row w-full justify-center items-center mt-[70px] pb-[70px] <md:(flex-col mt-[55px] pb-[40px]) text-white">
            <button
                @click="onClickDownload"
                class="w-[198px] bg-primary rounded-[10px] border-1 border-white flex flex-row items-center justify-center py-[12px]">
              <img class="w-[22px] h-[22px]" src="/the-footer/download.png" alt="">
              <span class="pl-[12px] text-[18px]">
                Download App
              </span>
            </button>

            <button
                @click="onClickOpenAccount"
                class="<md:(mt-[20px] ml-0) ml-[20px] w-[198px] bg-primary rounded-[10px] border-1 border-white flex flex-row items-center justify-center py-[12px]">
              <img class="w-[22px] h-[22px]" src="/the-footer/OpenAccount.png" alt="">
              <span class="pl-[12px] text-[18px]">
                Open Account
              </span>
            </button>
          </div>
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
import TheStpesStyle2 from "~/components/the-stpes-style2.vue";

export default defineComponent({
  components: {
    TheStpesStyle2,
    ThePart,
    BluePointer
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "The process we follow",
      cardT1: "Ready to get started?",
      cardT2: "Get in touch, or create an account",
    })

    const steps = reactive([
      {
        step: "Step 1",
        description: "Register as a Steadyoption member for free,then login or contact dedocated customer service",
        image: "/products/part8/MaskGroup.png"
      },
      {
        step: "Step 2",
        description: "After login,enter”Project”,select the documentary financial product that meets your requirements ,and invest",
        image: "/products/part8/MaskGroup-1.png"
      },
      {
        step: "Step 3",
        description: "After completing the investment enter”History”,you can view the order you are investing and the income and income details",
        image: "/products/part8/MaskGroup-2.png"
      },
      {
        step: "Step 4",
        description: "The income is settled to the account ever day,you dont need to operate,just wait for the income to arrive!",
        image: "/products/part8/MaskGroup-3.png"
      },
    ])

    const onClickDownload = () => {

    }

    const onClickOpenAccount = () => {

    }

    return {
      mq,
      text,
      steps,
      onClickDownload,
      onClickOpenAccount,
    }
  }
})

</script>

<style lang="scss">


</style>

