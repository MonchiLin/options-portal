<template>
  <div
      class="
          <md:(flex-col-reverse py-[10px] px-[10px])
          flex flex-row py-[68px] px-[24px]
          bg-[#E1EFFF]
        "
  >
    <img src="/company/groupstructure/par2_1/building1.png" class="w-[50%] <md:(w-full mt-[14px])" alt="">

    <div class="flex flex-col ml-[76px] <md:(ml-[0px])">
      <p class="text-[36px] text-primary font-black <md:(text-[24px])">{{ text.t1 }}</p>
      <p class="text-[16px] leading-[28px] mt-[30px] text-secondary <md:(text-[14px] leading-[28px] mt-[20px])">{{ text.t2 }}</p>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { computed, reactive, ref, watch } from "vue";
import ThePart from "~/components/the-part.vue";
import TabBar from "~/components/tab-bar.vue";
import IosArrowUpIcon from 'vue-ionicons/dist/ios-arrow-up.vue'
import IosArrowDownIcon from 'vue-ionicons/dist/ios-arrow-down.vue'

export default defineComponent({
  components: {
    TabBar,
    ThePart,
    IosArrowUpIcon,
    IosArrowDownIcon
  },
  props: {
    siteInfo: Object
  },
  setup(props) {
    const siteInfo=props.siteInfo
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Introduction",
      t2: siteInfo.siteName+" Group (the \"Group\") is an international financial services group that applies a wide range of standards relating to corporate governance, including the SIX "+siteInfo.siteName+" Exchange's Directive on Information relating to Corporate Governance and FINMA Circular 2017/1 \"Corporate governance – banks\". This Corporate Governance Report informs shareholders, prospective investors as well as the larger public on the Group's policies in matters of corporate governance, which is at the heart of a proper business conduct and a central part of the Group's internal organisation. ",
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

