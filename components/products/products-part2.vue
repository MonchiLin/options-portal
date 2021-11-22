<template>
  <the-part
      background-for-md="/index/background_2_mobile.png"
      background="/index/background_2.png"
  >
    <div
        class="
          <md:(flex-col pb-[34px] h-auto justify-start)
          h-[816px] justify-between
          bg-cover flex items-center page-content
        "
    >
      <div
          class="
          <md:(pt-[30px] justify-start px-[20px])
          flex flex-col justify-evenly
        ">

        <h6 class="text-blue text-[16px]">{{ text.t1 }}</h6>
        <h5 class="pt-[10px] text-primary text-[35px] font-black">{{ text.t2 }}</h5>

        <ul class="mt-[30px] text-secondary font-medium">
          <li v-for="item of text.t3" :key="item" class="flex flex-row items-center">
            <div class="h-full self-start mt-[3px]">
              <blue-pointer/>
            </div>
            <span class="pl-[12px]">{{item}}</span>
          </li>
        </ul>


        <!--   按钮   -->
        <button
            class="<md:(mt-[42px]) text-[16px] leading-[24px] mt-[30px] w-[193px] bg-orange text-white rounded-[6px] py-[12px] flex items-center justify-center">
          {{ text.t4 }}
        </button>

      </div>

      <img
          src="/index/phone-preview.png"
          class="
          <md:(mt-[38px])
          w-[320px]
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
      t1: "Success starts with the right platform",
      t2: "A leading UK investment services company. A rich heritage of providing effective financial solutions has made us a trusted partner of over a million people. We provide a wide array of products and services such as distribution of mutual funds & insurance, equity and derivatives, commodity, PMS and financial planning. ",
      t3: [
        "Guarantee company underwriting risk",
        "Zero taxes, guaranteed high yield",
        "Regular or flexible investment at will",
      ],
      t4: "Download App"
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

