<template>
  <div class="flex-col flex">
    <div class="<md:(pb[24px] flex-col) flex flex-row justify-between">
      <div class="<md:(w-full) w-[45%] flex flex-col">
        <div
          v-for="(item, index) of locations"
          :key="index"
          class="flex flex-row items-center mt-[30px]"
        >
          <img
            class="w-[24px] h-[24px] self-start"
            src="/company/contractus/part3/Location.png"
            alt=""
          />
          <div class="flex flex-col ml-[16px]">
            <p class="text-[18px] font-black text-primary">{{ item.name }}</p>
            <p
              class="
                mt-[10px]
                text-[18px] text-secondary
                <md:(text-[12px]
                leading-[15px])
              "
            >
              {{ item.location }}
            </p>
          </div>
        </div>
      </div>

      <img
        class="<md:(w-full h-[318px] mt-[20px]) w-[500px] h-[476px]"
        src="/company/contractus/part3/building.png"
        alt=""
      />
    </div>

    <div
      class="
        flex flex-row
        mt-[20px]
        items-center
        flex-wrap
        <md:(flex-col
        items-start)
      "
    >
      <span class="text-[16px] font-black">{{ text.t1 }}</span>
      <div class="pl-[68px] flex flex-row items-center <md:(pl-0 mt-[16px])">
        <img
          style="filter: drop-shadow(0px 13px 18px rgba(17, 19, 35, 0.08))"
          class="w-[34px] h-[34px]"
          src="/company/contractus/part3/Facebook.png"
          alt=""
        />
        <img
          style="filter: drop-shadow(0px 13px 18px rgba(17, 19, 35, 0.08))"
          class="ml-[20px] w-[34px] h-[34px]"
          src="/company/contractus/part3/chat.png"
          alt=""
        />
        <img
          style="filter: drop-shadow(0px 13px 18px rgba(17, 19, 35, 0.08))"
          class="ml-[20px] w-[34px] h-[34px]"
          src="/company/contractus/part3/Twitter.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ApiWrap, BASE_URL, useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
export default defineComponent({
  components: {},
  async setup() {
    const mq = useMediaQuery();
    const text = reactive({
      t1: "You Can also Connect with Us",
    });

    const api = BASE_URL + "/api/home/corpAddress";
    const { data: res } = await useFetch<string, String>(api);
    const data = res.value?.data ?? {};
    const locations = reactive([]);
    for (var i in data) {
      locations.push({
        name: data[i].split(":")[0],
        location: data[i].split(":")[1],
      });
    }

    return {
      text,
      locations,
      mq,
    };
  },
});
</script>

<style lang="scss">
</style>

