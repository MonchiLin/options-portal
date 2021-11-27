<template>
  <the-part
    background-for-md="/index/background_2_mobile.png"
    background="/index/background_2.png"
  >
    <div
      class="
        <md:(flex-col
        pb-[34px]
        h-auto
        justify-start)
        h-[816px]
        justify-between
        bg-cover
        flex
        items-center
        page-content
      "
    >
      <div class="<md:(pt-[20px] justify-start) flex flex-col justify-evenly">
        <h6 class="text-blue text-[16px]">{{ text.t1 }}</h6>
        <h5 class="pt-[10px] text-primary text-[35px] font-black">
          {{ text.t2 }}
        </h5>
        <p
          class="
            <md:(w-auto)
            pt-[30px]
            w-[631px]
            leading-[32px]
            text-primary text-[18px]
          "
        >
          {{ text.t3 }}
        </p>

        <ul class="mt-[30px] text-secondary font-medium">
          <li
            v-for="item of text.t4"
            :key="item"
            class="flex flex-row items-center"
          >
            <div class="h-full self-start mt-[3px]">
              <blue-pointer />
            </div>
            <span class="pl-[12px]">{{ item }}</span>
          </li>
        </ul>

        <!--   按钮   -->
        <div class="<md:(justify-between) mt-[42px] flex flex-row items-center">
          <a :href="siteInfo.webDomain + '/#/projectList'">
            <button
              class="w-[163px] h-[48px] bg-orange rounded-[6px] text-white"
            >
              {{ text.t5 }}
            </button>
          </a>
          <a href="/products">
            <div class="flex items-center ml-[30px]">
              <span class="text-orange">{{ text.t6 }}</span>
              <img
                class="w-[22px] pl-[10px]"
                src="/index/arrow-right.png"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>

      <img
        src="/index/phone-preview.png"
        class="<md:(mt-[38px]) w-[320px]"
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
    const siteInfo = props.siteInfo;
    const mq = useMediaQuery();
    const text = reactive({
      t1: "Partners for wealth creation",
      t2: "What We Offer",
      t3:
        "The financial goal of every individual is different. At " +
        siteInfo.siteName +
        ", we conduct thorough research to zero inon the right mutual fund scheme for you. "+siteInfo.siteName+"’s fundrecommendations are based on an in-depth analysis ofvarious categories of equity and debt mutual fund schemes.",
      t4: [
        "The right choice for 170,000+ worldwide",
        "Cumulative user revenue has reached 1.7 billion rupees",
        "Starting at Rs 1,000",
        "The income is settled to the account daily",
        "Annualized income is as high as 132%+",
      ],
      t5: "Invest now",
      t6: "Learn more",
    });

    return {
      mq,
      text,
      siteInfo: siteInfo,
    };
  },
});
</script>

<style lang="scss">
</style>

