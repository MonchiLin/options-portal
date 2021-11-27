<template>
  <the-get-started
      class="
          <md:(h-auto pt-[30px] pb-[32px])
         "
  :siteInfo="siteInfo" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive, ref } from "vue";
import ThePart from "~/components/the-part.vue";
import Part5Card from "~/components/index/part5/part5-card.vue";
import Part5CardBox from "~/components/index/part5/part5-card-box.vue";
import Pagintion from "~/components/pagintion.vue";
import IosArrowRoundForwardIcon from 'vue-ionicons/dist/ios-arrow-round-forward.vue'
import TheGetStarted from "~/components/the-get-started.vue";

export default defineComponent({
  components: {
    TheGetStarted,
    Pagintion,
    Part5CardBox,
    Part5Card,
    ThePart,
    IosArrowRoundForwardIcon
  },
  props: {
    siteInfo: Object
  },
  setup(props){
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Get started for free",
      t2: "Choosing the best performing trader's trading strateg",
      t3: "Open an account"
    })
    const siteInfo=props.siteInfo
    return {
      mq,
      text,
      siteInfo
    }
  }
})

</script>

<style lang="scss">

</style>

