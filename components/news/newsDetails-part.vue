<template>
  <the-part
      background-color="white"
  >
    <div
        class="
          <md:(py-[30px])
          py-[60px]
          flex items-center page-content flex-col company-faq
        "
    >
      <div class="w-full">
        <p class="text-center text-[35px] text-primary font-black <md:(text-[20px])">{{ part3Text.t1 }}</p>
        <div
            class="whitespace-pre-line text-[18px] leading-[32px] mt-[30px] text-primary <md:(text-[14px] leading-[28px] mt-[20px])"
            v-html="part3Text.t2"
        >

        </div>
      </div>


    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ApiWrap, BASE_URL, useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import TabBar from "~/components/tab-bar.vue";
import IosArrowUpIcon from 'vue-ionicons/dist/ios-arrow-up.vue'
import { useRoute } from "vue-router";
import { useFetch } from "#app";

type DataType = {
  id: number,
  title: string
  req: string
  addTime: number,
  classId: number,
  content: string
  className: string
};

const defaultData = {
  "id" : 1,
  "title" : "测试资讯标题1",
  "req" : "0",
  "addTime" : 1565872116000,
  "classId" : 1,
  "content" : "111111111111111",
  "className" : "首页滚动资讯"
};

export default defineComponent({
  components: {
    TabBar,
    ThePart,
    IosArrowUpIcon,
  },
  async setup() {
    const mq = useMediaQuery()

    const part3Text = reactive({
      t1: "Group shareholders",
      t2: " "
    })


    const route = useRoute();
    const newsId = route.params.newsId

    const api = BASE_URL + "/api/index/articleDetail";
    const {data: res} = await useFetch<string, ApiWrap<DataType>>(api, {
      method: "post",
      params: {articleId: newsId},
    });
    const data = res.value?.data ?? defaultData;
    part3Text.t1 = data.title
    part3Text.t2 = data.content

    return {
      mq,
      part3Text
    }
  }
})

</script>

<style lang="scss">

.company-faq {

  .active-tabbar-item {
    box-shadow: 0px 4px 4px rgba(59, 79, 109, 0.08);
  }

}

</style>

