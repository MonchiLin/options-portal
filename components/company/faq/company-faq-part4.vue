<template>
  <the-part
      background-color="#FAFAFA"
  >
    <the-get-started
        class="
          <md:(h-auto pt-[30px] pb-[32px])
         page-content
        "
    >

    </the-get-started>
  </the-part>
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
  setup() {
    const mq = useMediaQuery()

    return {
      mq
    }
  }
})

</script>

<style lang="scss">

</style>

