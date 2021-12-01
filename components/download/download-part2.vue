<template>
  <the-part
    background-for-md="/download/part2/bg_m.png"
    background="/download/part2/bg.png"
  >
    <div
      class="
        <md:(flex-col
        pb-[14px]
        pt-[20px]
        h-auto
        justify-start) justify-between
        pb-[38px]
        pt-[60px]
        bg-cover
        flex
        items-center
        page-content
      "
    >
      <div
        class="
          <md:(pt-[30px]
          justify-start
          px-[20px])
          flex flex-col
          justify-evenly
        "
      >
        <h6 class="text-primary text-[35px] font-black <md:(text-[20px])">
          {{ text.t1 }}
        </h6>
        <h5
          class="
            pt-[10px]
            text-[#18191F] text-[18px]
            leading-[32px]
            <md:(text-[14px]
            leading-[20px])
          "
        >
          {{ text.t2 }}
        </h5>

        <ul class="mt-[30px] text-secondary font-medium">
          <li
            v-for="item of text.t3"
            :key="item"
            class="flex flex-row items-center mt-[16px]"
          >
            <blue-pointer />
            <span class="pl-[12px]">{{ item }}</span>
          </li>
        </ul>

        <!--   按钮   -->
        <a :href="siteInfo.androidUrl">
          <button
            class="
              <md:(mt-[30px])
              text-[16px]
              leading-[24px]
              mt-[80px]
              w-[193px]
              bg-orange
              text-white
              rounded-[6px]
              py-[12px]
              flex
              items-center
              justify-center
            "
          >
            {{ text.t4 }}
          </button>
        </a>
      </div>

      <img
        src="/download/part2/phones.png"
        class="<md:(mt-[38px] w-full h-auto) w-[440px] h-[424px]"
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
    BluePointer,
  },
  props: {
    siteInfo: Object,
  },
  setup(props) {
    const mq = useMediaQuery();
    const siteInfo = props.siteInfo;
    const text = reactive({
      t1: "Success starts with the right platform",
      t2: "A leading India investment services company. A rich heritage of providing effective financial solutions has made us a trusted partner of over a million people. We provide a wide array of products and services such as distribution of mutual funds & insurance, equity and derivatives, commodity, PMS and financial planning. ",
      t3: [
        "Guarantee company underwriting risk",
        "Zero taxes, guaranteed high yield",
        "Regular or flexible investment at will",
      ],
      t4: "Download App",
    });
    
    return {
      mq,
      text,
      siteInfo,
    };
  },
});
</script>

<style lang="scss">
</style>

