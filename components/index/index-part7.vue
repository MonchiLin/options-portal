<template>
  <the-part background-color="white">
    <div
      class="
        <md:(py-[30px])
        py-[60px]
        flex
        items-center
        page-content
        flex-col
        h-auto
      "
    >
      <p
        class="
          <md:(text-[20px])
          text-[35px]
          font-black
          text-[#0B132A]
          leading-[30px]
          text-center
        "
      >
        {{ text.t1 }}
      </p>

      <div
        class="
          <md:(h-auto
          pt-[20px]
          flex-col)
          pt-[60px]
          flex-row
          w-full
          flex
          justify-between
        "
      >
        <div
          v-for="(item, index) of cardData"
          :key="index"
          class="
            <md:(w-100%
            mb-[10px])
            max-w-[350px]
            flex
            items-center
            flex-col
            rounded-[20px]
          "
        >
          <img
            class="
              <md:(w-100%
              mb-[10px]
              w-[350px]
              h-[330px]) h-[300px]
              w-full
              flex
              items-center
              flex-col
              rounded-[20px]
            "
            :src="item.coverImage"
            alt=""
          />

          <div class="flex flex-row relative mt-[25px]">
            <div
              style="border: 2px solid #ef7f3c"
              class="relative top-[15px] w-[40px] h-1"
            />
            <a :href="item.link">
              <div class="ml-[14px] relative">
                <p class="text-[20px] leading-[32px]">{{ item.label }}</p>
                <a
                  :href="item.link"
                  class="flex flex-row items-center relative w-full mt-[24px]"
                >
                  <span>{{ text.t2 }}</span>
                  <ios-arrow-round-forward-icon
                    class="pl-[8px] relative top-[2px]"
                  />
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ApiWrap, BASE_URL, useMediaQuery } from "~/utils/shared";
import { reactive, ref } from "vue";
import ThePart from "~/components/the-part.vue";
import Part5Card from "~/components/index/part5/part5-card.vue";
import Part5CardBox from "~/components/index/part5/part5-card-box.vue";
import Pagintion from "~/components/pagintion.vue";
import IosArrowRoundForwardIcon from "vue-ionicons/dist/ios-arrow-round-forward.vue";
import cloneDeep from "lodash-es/cloneDeep";
type DataType = {
  addTime: number;
  artDesc: string;
  articleClassId: number;
  articleClassMark: string;
  articleClassSecondLevelId: number;
  className: string;
  content: string;
  description: string;
  id: number;
  img: string;
  keywords: string;
  mark: string;
  read: number;
  seq: number;
  siteId: number;
  siteName: string;
  status: string;
  title: string;
  url: string;
};
const defaultData = {
  coverImage: "/index/part7/i1.png",
  label: "It Does Not Matter Hows Slowly go as Long",
  link: "/",
};

export default defineComponent({
  components: {
    Pagintion,
    Part5CardBox,
    Part5Card,
    ThePart,
    IosArrowRoundForwardIcon,
  },
  async setup() {
    const mq = useMediaQuery();
    const text = reactive({
      t1: "Market News",
      t2: "Continue Reading",
    });

    const cardData = ref([
      // {
      //   coverImage: "/index/part7/i1.png",
      //   label: "It Does Not Matter Hows Slowly go as Long",
      //   link: "/",
      // },
      // {
      //   coverImage: "/index/part7/i2.png",
      //   label: "It Does Not Matter Hows Slowly go as Long",
      //   link: "/",
      // },
      // {
      //   coverImage: "/index/part7/i3.png",
      //   label: "It Does Not Matter Hows Slowly go as Long",
      //   link: "/",
      // },
    ]);
    const api = BASE_URL + "/api/index/articleList";
    const { data: res } = await useFetch<string, ApiWrap<DataType[]>>(api, {
      method: "post",
      params: { articleClassMark: "article", pageSize: 4 },
    });
    const data = res.value?.data ?? [];
    cardData.value = data.map((i: DataType) => {
      const item = cloneDeep(defaultData);
      item.coverImage = BASE_URL + i.img;
      item.label = i.title;
      item.link = "/news/" + i.id;
      return item;
    });
    console.log(data);
    return {
      mq,
      text,
      cardData,
    };
  },
});
</script>

<style lang="scss">
</style>

