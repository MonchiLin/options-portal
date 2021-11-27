<template>
  <div
      class="
          <md:(pb-[10px])
          flex flex-col pb-[68px] items-center
        "
  >
    <div class="flex flex-col <md:(ml-[0px]) items-center">
      <p class="text-[35px] text-primary font-black <md:(text-[20px])">{{ text.t1 }}</p>
      <p class="text-[18px] leading-[32px] mt-[30px] text-secondary <md:(text-[14px] leading-[20px] mt-[20px])">{{ text.t2 }}</p>
    </div>
    <img src="/company/groupstructure/par2_2/Groupstructure.png" class="w-full mt-[60px] <md:(mt-[25px])" alt="">

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
      t1: "Group structure",
      t2: "The structure of the Group, which comprises "+siteInfo.siteName+" Group Holding Ltd and its subsidiaries, is designed to support the Group's operations within an efficient regulatory and tax framework.\n" +
          "The Group comprises the following active companies as at 31 December 2019:/1 \"Corporate governance – banks\". This Corporate Governance Report informs shareholders, prospective investors as well as the larger public on the Group's policies in matters of corporate governance, which is at the heart of a proper business conduct and a central part of the Group's internal organisation. ",
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

