<template>
  <the-part
      background-color="#FAFAFA"
  >
    <div
        class="
          <md:(h-auto pt-[30px] pb-[15px])
          pb-[30px] pt-[60px]
          flex items-center page-content flex-col
        "
    >

      <p class="<md:(text-[20px] leading-[30px]) text-[35px] font-black text-[#0B132A] leading-[50px] text-center">
        {{ text.t1 }}
      </p>

      <div
          class="
            <md:(h-auto pt-[20px] flex-col)
            pt-[60px] flex-row w-full
            flex items-center justify-between
          "
      >

        <div
            v-for="(item, index) of cardData"
            :key="index"
            :class="[cardIndex === index]"
            class="
              <md:(w-100% mb-[10px])
              w-[350px] h-[230px] px-[30px] py-[30px]
              flex items-center flex-col border-[2px] rounded-[10px] border-[#DDDDDD] hover:bg-[white]
            "
        >

          <!--       头像-人名   -->
          <div class="flex flex-row w-full">
            <img :src="item.avatar" class="flex-shrink-0 w-[50px] h-[50px]" alt="">
            <div class="flex-1 flex flex-col ml-[17px]">
              <p>{{ item.name }}</p>
              <p>{{ item.jobTitle }}</p>
            </div>
          </div>
          <!--        描述  -->

          <p class="mt-[20px] text-[16px] leading-[30px]">{{ item.description }}</p>

        </div>

      </div>

      <pagintion class="mt-[20px]" v-model:page-index="paging.pageIndex" :page-total="paging.pageTotal"/>
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
// import { ElCarousel, ElCarouselItem } from "element-plus/lib/components/carousel";

export default defineComponent({
  components: {
    Pagintion,
    Part5CardBox,
    Part5Card,
    ThePart,
    // ElCarousel,
    // ElCarouselItem
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "We are only as GOOD as our clients say WE ARE",
    })

    const cardData = [
      {
        name: "Gulam sarwar",
        jobTitle: "Dubai",
        avatar: "/index/part6/avatar1.png",
        description: " Receive 30,000 rupees for free, which disappoints me! Now I rely on the steady option platform to get a stable income! ",
      },
      {
        name: "Sikha Devi",
        jobTitle: "Sydney",
        avatar: "/index/part6/avatar2.png",
        description: " Great! My investment is making a profit, and I hope that the platform can add more new financial products! ",
      },
      {
        name: "Manoj Jagtap",
        jobTitle: "Thailand",
        avatar: "/index/part6/avatar3.png",
        description: "After using it for a while, I feel that this is the financial product I want ",
      },

    ]

    const cardIndex = ref(0)

    const paging = reactive({
      pageIndex: 1,
      pageTotal: 4
    })

    return {
      mq,
      text,
      cardData,
      paging,
      cardIndex
    }
  }
})

</script>

<style lang="scss">

</style>

