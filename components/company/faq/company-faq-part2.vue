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
        company-faq
      "
    >
      <tab-bar
        :items="tabItems"
        v-model:index="tabIndex"
        tabbar-class="bg-[#F8F8FA]"
        tabbar-item-class="w-[190px] text-[14px] leading-[24px] text-center <md:(w-[100%] leading-[16px])"
        tabbar-item-active-class="text-[secondary] active-tabbar-item"
        tabbar-item-un-active-class="text-[secondary] opacity-50"
      />

      <div class="pt-[20px]" />
      <prime-panel
        class="<md:() pt-[10px] w-full"
        :toggleable="true"
        v-model:collapsed="collapseds[index]"
        v-for="(item, index) of tabDetail"
        :key="index"
      >
        <template #header>
          <div
            @click="toggle(index)"
            class="
              flex-row flex
              items-center
              justify-between
              w-full
              h-[70px]
              px-[30px]
              <md:(px-[10px])
            "
          >
            <span
              class="
                font-medium
                text-secondary text-[17px]
                leading-[35px]
                <md:(text-[14px]
                leading-[20px])
              "
            >
              {{ item.title }}
            </span>
            <div
              class="
                w-[30px]
                h-[30px]
                flex
                items-center
                justify-center
                cursor-pointer
              "
            >
              <ios-arrow-down-icon
                class="transform transition duration-500"
                :class="[!collapseds[index] && 'rotate-180']"
              />
            </div>
          </div>
        </template>

        <div class="opacity-70 text-primary w-[75%] <md:(w-full)">
          {{ item.content }}
        </div>
      </prime-panel>
    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ApiWrap, BASE_URL, useMediaQuery } from "~/utils/shared";
import { computed, reactive, ref, watch } from "vue";
import ThePart from "~/components/the-part.vue";
import TabBar from "~/components/tab-bar.vue";
import IosArrowUpIcon from "vue-ionicons/dist/ios-arrow-up.vue";
import IosArrowDownIcon from "vue-ionicons/dist/ios-arrow-down.vue";
import cloneDeep from "lodash-es/cloneDeep";
type DataType = {
  id: number;
  className: string;
};
type articleDataType = {
  title: string;
  content: string;
};
const defaultData = {
  id: 1,
  className: "It Does Not Matter Hows Slowly go as Long",
};
const tabDetails = [];
export default defineComponent({
  components: {
    TabBar,
    ThePart,
    IosArrowUpIcon,
    IosArrowDownIcon,
  },
  async setup() {
    
    const mq = useMediaQuery();
    const tabIndex = ref(0);
    const api = BASE_URL + "/api/index/articleClassList";

    const { data: res } = await useFetch<string, ApiWrap<DataType[]>>(api, {
      method: "post",
      params: { mark: "faq" },
    });

    const data = res.value?.data ?? [];
    const tabItems = [];
    const tabDetails = [];
    
    data.map(async (i: DataType) => {
      tabItems.push(i.className);
      const articleClassListapi = BASE_URL + "/api/index/articleList";
      const response = await fetch(articleClassListapi, {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: 'articleClassMark='+i['mark'],
      })
       const articleClassList=await response.json();
       
        tabDetails.push(articleClassList.data)
        
        
    });
   
    

    const tabDetail = computed(() => tabDetails[tabIndex.value] || []);

    const collapseds = ref<Record<string, boolean>>({});

    watch(
      tabIndex,
      () => {
        collapseds.value = tabDetail.value.reduce((p, c, i) => {
          return { ...p, [i]: true };
        }, {});
      },
      { immediate: true }
    );

    const toggle = (index) => {
      const value = !collapseds.value[index];
      Object.keys(collapseds.value).forEach((key) => {
        collapseds.value[index] = true;
      });
      collapseds.value[index] = value;
    };

    return {
      mq,
      tabIndex,
      tabDetail,
      tabItems,
      tabDetails,
      collapseds,
      toggle,
    };
  },
});
</script>

<style lang="scss">
.company-faq {
  .active-tabbar-item {
    box-shadow: 0px 4px 4px rgba(59, 79, 109, 0.08);
  }

  .p-panel .p-panel-header {
    padding: 0;
    background-color: transparent;
  }

  .p-panel-icons {
    display: none;
  }
}
</style>

