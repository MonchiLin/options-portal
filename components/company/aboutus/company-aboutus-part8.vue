<template>
  <the-part
      background-color="#FAFAFA"
  >
    <div
        class="
          <md:(h-auto flex-col-reverse pt-[30px] pb-[32px])
          flex items-center page-content flex-row
        "
    >

      <div class="<md:(ml-0 items-center) w-full flex flex-col justify-center h-full">
        <p class="<md:(text-20px) text-35px font-black">{{ text.t1 }}</p>

        <p class="<md:(mt-[18px] text-center) mt-[18px]">{{ text.t2 }}</p>
      <a :href="siteInfo.webDomain">
        <button class="<md:(mt-[18px]) mt-[18px] w-[279px] bg-orange text-white rounded-[6px] py-[12px] flex items-center justify-center">
          {{ text.t3 }}
        </button>
      </a>
      </div>

      <img
          class="
            <md:(h-auto flex-col)
            w-[300px] h-[300px]
          "
          src="/company/aboutus/part8/Getstarted.png"
      />

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
  }, props: {
    siteInfo: Object
  },
  setup(props) {
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

