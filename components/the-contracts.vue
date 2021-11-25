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
type DataType = {
  id: number;
  userId: number;
  siteName: string;
  siteLogo: string;
  siteDomain: string;
  shortDomain: string;
  adminDomain: string;
  webDomain: string;
  siteEmail: string;
  siteTelephone: string;
  siteMobile: string;
  siteWhatsapp: string;
  siteTelegram: string;
  siteFacebook: string;
  siteTwitter: string;
  siteYoutube: string;
  siteTiktok: string;
  corpName: string;
  corpAddress: string;
  status: string;
  serviceTime: string;
  countryCode: string;
  currencyCode: string;
  addTime: number;
  currencySymbol: string;
  areaCode: string;
  timeZone: number;
};
export default defineComponent({
  components: {
    TabBar,
    ThePart,
  },
  async setup() {
    const mq = useMediaQuery();

    const api = BASE_URL + "/api/home/siteInfo";
    const { data: res } = await useFetch<string, ApiWrap<DataType>>(api);
    const data = res.value?.data ?? {};
    const datas = reactive([
      {
        icon: "/company/contractus/part2/phone.png",
        label: "Contact number",
        type: ContractKind.PhoneNumber,
        contract: data["siteTelephone"],
      },
      {
        icon: "/company/contractus/part2/MAIL.png",
        label: "E-Mail",
        type: ContractKind.Email,
        contract: data["siteEmail"],
      },
      {
        icon: "/company/contractus/part2/Server.png",
        label: "WhatsApp",
        type: ContractKind.PhoneNumber,
        contract: data["siteWhatsapp"],
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

