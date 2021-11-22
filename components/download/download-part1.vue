<template>
  <the-part
      background-for-md="/download/part1/bg_m.jpg"
      background="/download/part1/bg.png"
  >
    <div
        class="
          <md:(h-[837px] w-full flex-col-reverse)
          h-[600px] flex-row
          page-content flex items-center text-white justify-center
        "
    >
      <div class="flex flex-col w-50% <md:(w-full items-center)">
        <h3 class="<md:(text-[24px] leading-[40px]) text-[40px] leading-[60px] text-white font-black">{{ text.t1 }}</h3>
        <h3 class="<md:(pt-[20px]) pt-[30px] text-[18px] leading-[28px] text-white opacity-80">{{ text.t2 }}</h3>
        <button
            class="<md:(mt-[42px]) text-[16px] leading-[24px] mt-[30px] w-[193px] bg-orange text-white rounded-[6px] py-[12px] flex items-center justify-center">
          {{ text.t3 }}
        </button>
      </div>

      <img src="/download/part1/compute.png" class="w-[440px] h-[330px] <md:(w-[375px] h-[255px])" alt="">

    </div>

  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {ThePart},
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Ideal trading platform for the world's investors",
      t2: "The financial goal of every individual is different. At Steadyoption, we conduct thorough research to zero in on the right mutual fund scheme for you. Steady fund recommendations are based on an in-depth analysis of various categories of equity and debt mutual fund schemes. ",
      t3: "Download App",
    })

    return {
      mq,
      text
    }
  }
})

</script>
