<template>
  <the-part
      background-for-md="/products/part3/bg_m.png"
      background="/products/part3/bg.png"
  >
    <div
        class="
          <md:(flex-col pb-[14px] pt-[20px] h-auto justify-start)
          justify-between pb-[38px] pt-[60px]
          bg-cover flex items-center page-content
        "
    >

      <img
          src="/products/part3/empolye.png"
          class="
          <md:(mt-[38px] w-full h-auto)
          w-[509px] h-auto
        "
          alt=""
      >

      <div
          class="
          <md:(pt-[30px] justify-start px-[20px] ml-0)
          ml-[47px]
          flex flex-col justify-evenly
        ">

        <h6 class="text-primary text-[35px] leading-[48px] font-black <md:(text-[20px] leading-[20px])">{{ text.t1 }}</h6>
        <h5 class="whitespace-pre-line pt-[30px] text-[#18191F] text-[18px] leading-[32px] <md:(text-[14px] leading-[20px])">{{ text.t2 }}</h5>

        <!--   按钮   -->
        <button
            class="<md:(mt-[30px]) text-[16px] leading-[24px] mt-[16px] w-[193px] bg-orange text-white rounded-[6px] py-[12px] flex items-center justify-center">
          {{ text.t3 }}
        </button>

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
      t1: "Top traders work for you - no management fees",
      t2: "Register SteadyOption and purchase documentary financial products without additional costs, and no management fees or other hidden costs are involved.\n" +
          "\n" +
          "Behind all the documentary financial products of the platform is a top-level professional investment team. They are both intelligent and experienced, and they are all elites in the industry. Now, you have the opportunity to let them work for you and let a team invest for you! This is the advantage of documentary financial management, and it is also a factor welcomed by investors!",
      t3: "Invest now"
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

