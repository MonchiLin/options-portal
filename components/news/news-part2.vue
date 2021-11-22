<template>
  <the-part
      background-color="white"
  >
    <div
        class="
          <md:(pb-[30px] pt-[30px])
          py-[60px]
          flex page-content flex-col
        "
    >
      <div
          class="
          <md:(flex-col)
          flex-row flex-wrap
          flex w-full
        "
      >
        <div
            v-for="(item, index) of news"
            :key="index"
            class="
              <md:(w-full mb-[30px] mr-0)
              w-[350px] flex-shrink-0 mr-[30px]
              flex items-center flex-col
            "
        >
          <img :src="item.cover" class="w-full h-[198px]" alt="">
          <p class="text-[#000000] text-[18px] leading-[32px] <md:(leading-[26px]) mt-[20px]">{{ item.title }}</p>
          <p class="text-[#666666] text-[14px] leading-[21px] <md:(leading-[26px]) mt-[10px]">{{ item.content }}</p>
        </div>
      </div>

      <button-pagintion class="mt-[60px]" v-model:page-index="index" :page-total="5"/>
    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { computed, reactive, ref } from "vue";
import ThePart from "~/components/the-part.vue";
import TabBar from "~/components/tab-bar.vue";
import IosArrowUpIcon from 'vue-ionicons/dist/ios-arrow-up.vue'
import CompanyGroupstructurePart2Part11
  from "~/components/company/groupstructure/company-groupstructure-part2-part1-1.vue";
import CompanyGroupstructurePart2Part12
  from "~/components/company/groupstructure/company-groupstructure-part2-part1-2.vue";
import CompanyGroupstructurePart2Part13
  from "~/components/company/groupstructure/company-groupstructure-part2-part1-3.vue";
import CompanyGroupstructurePart2Part14
  from "~/components/company/groupstructure/company-groupstructure-part2-part1-4.vue";
import CompanyGroupstructurePart2Part21
  from "~/components/company/groupstructure/company-groupstructure-part2-part2-1.vue";
import ButtonPagintion from "~/components/button-pagintion.vue";

const data = {
  cover: "/news/part2/cover.png",
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
}

export default defineComponent({
  components: {
    ButtonPagintion,
    TabBar,
    ThePart,
    IosArrowUpIcon,
  },
  setup() {
    const mq = useMediaQuery()
    const news = reactive([
      data, data, data,
      data, data, data,
      data, data, data,
      data, data, data,
    ])

    const index = ref(1)

    return {
      index,
      mq,
      news,
    }
  }
})

</script>

<style lang="scss">


</style>

