<template>
  <the-part
      background-color="#FAFAFA"
  >
    <div
        class="
          <md:(h-auto flex-col pt-[20px] pb-[39px])
          flex items-center page-content flex-row
        "
    >

      <img
          class="
            <md:(h-auto flex-col w-[300px] h-[270px])
            w-[480px] h-[434px]
          "
          src="/index/part8/Newtoinvesting.png"/>

      <div class="<md:(ml-0 items-center) ml-[158px] flex flex-col justify-center h-full">
        <p class="<md:(text-20px) text-35px font-black">{{ text.t1 }}</p>

        <p class="<md:(mt-[18px]) mt-[18px]">{{ text.t2 }}</p>

        <button class="<md:(mt-[18px]) mt-[18px] w-[279px] bg-orange text-white rounded-[6px] py-[12px] flex items-center justify-center">
          {{ text.t1 }}
        </button>

      </div>

    </div>
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

export default defineComponent({
  components: {
    Pagintion,
    Part5CardBox,
    Part5Card,
    ThePart,
    IosArrowRoundForwardIcon
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "New to investing?",
      t2: "Discover Steadyoption: Practice customer service to\n" +
          "receive Rs30000 experience gold, free experience",
      t3: "Contact costomer service"
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

