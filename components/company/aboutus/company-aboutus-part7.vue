<template>
  <the-part
      background="/company/aboutus/part7/bg.png"
      background-for-md="/company/aboutus/part7/bg_m.png"
  >
    <div
        class="
          <md:(h-[1147px] pt-[20px] pb-[20px])
          pt-[60px] pb-[30px] h-[452px]
          flex items-center page-content flex-col h-auto text-white
        "
    >

      <p class="<md:(text-[20px]) text-[35px] font-black text-center">
        {{ text.t1 }}
      </p>

      <div
          class="
            <md:(h-auto pt-[20px] flex-col)
            pt-[60px] flex-row w-full
            flex justify-between
          "
      >

        <div
            v-for="(item, index) of cardData"
            :key="index"
            class="
              <md:(w-100% mb-[10px] w-full)
              w-[255px] h-[255px] pt-[20px] pb-[30px]
              flex items-center flex-col relative
            "
        >

          <div
              class="
                <md:(w-100% mb-[10px])
                w-[200px] bg-cover h-[142px] pt-[20px]
                flex items-center flex-col rounded-[20px]
              "
              style="background-image: url('/company/aboutus/part7/wing.png')"
              alt=""
          >
            <p>{{ item.text1 }}</p>
            <p>{{ item.year }}</p>
          </div>

          <p class="whitespace-pre-line text-center"> {{ item.description }} </p>

        </div>

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
      t1: "Winner of high-profile awards",
    })

    const cardData = [
      {
        text1: "winner",
        year: "2021",
        description: "Word-class Online\n" +
            "Trading Platform",
      },
      {
        text1: "winner",
        year: "2021",
        description: "Best Trading\n" +
            "Execution",
      },
      {
        text1: "winner",
        year: "2021",
        description: "Highest Overall\n" +
            "Customer Satisfaction",
      },
      {
        text1: "winner",
        year: "2021",
        description: "Best Platform\n" +
            "Features",
      },
    ]

    return {
      mq,
      text,
      cardData
    }
  }
})

</script>

<style lang="scss">

</style>

