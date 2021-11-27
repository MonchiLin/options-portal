<template>
  <div class="flex items-center flex-col w-full">
    <div
      class="
        <md:(flex-col
        px-[36px]
        py-[25px]
        justify-start)
        flex-row
        justify-between
        px-[72px]
        py-[68px]
        flex
        w-full
        rounded-[10px]
      "
      style="box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07)"
    >
      <template :key="index" v-for="(item, index) of datas">
        <div class="<md:(w-full) w-[30%] items-center flex flex-row">
          <img
            :src="item.icon"
            class="w-[65px] h-[65px] <md:(w-[55px] h-[55px])"
            alt=""
          />
          <div class="flex flex-col ml-[10px]">
            <p class="text-[25px] <md:(text-[18px])">{{ item.label }}</p>
            <p class="mt-[10px] text-blue text-[16px] <md:(text-[14px])">
              {{ item.contract }}
            </p>
          </div>
        </div>

        <div
          v-if="index + 1 < datas.length"
          class="<md:(w-full my-[20px] h-[2px]) w-[1px] h-[60px] bg-[#EEEFF2]"
        ></div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ApiWrap, BASE_URL,useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import TabBar from "~/components/tab-bar.vue";
import cloneDeep from "lodash-es/cloneDeep";

enum ContractKind {
  PhoneNumber,
  Email,
  Link,
}

export default defineComponent({
  components: {
    TabBar,
    ThePart,
  },
   props: {
    siteInfo: Object
  },
  setup(props){
    const mq = useMediaQuery();
    const siteInfo=props.siteInfo
    const datas = reactive([
      {
        icon: "/company/contractus/part2/phone.png",
        label: "Contact number",
        type: ContractKind.PhoneNumber,
        contract: siteInfo["siteTelephone"],
      },
      {
        icon: "/company/contractus/part2/MAIL.png",
        label: "E-Mail",
        type: ContractKind.Email,
        contract: siteInfo["siteEmail"],
      },
      {
        icon: "/company/contractus/part2/Server.png",
        label: "WhatsApp",
        type: ContractKind.PhoneNumber,
        contract: siteInfo["siteWhatsapp"],
        link: "",
      },
    ]);

    return {
      mq,
      datas,
    };
  },
});
</script>

<style lang="scss">
</style>

