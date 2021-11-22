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

      <tab-bar
          :items="tabItems"
          v-model:index="tabIndex"
          tabbar-class="bg-[#F8F8FA]"
          tabbar-item-class="w-[190px] text-[14px] leading-[24px] text-center <md:(w-[100%] leading-[16px])"
          tabbar-item-active-class="text-[secondary] active-tabbar-item"
          tabbar-item-un-active-class="text-[secondary] opacity-50"
      />

      <div class="pt-[60px] <md:(pt-[20px])"/>
      <div v-show="tabIndex === 0" class="w-full">
        <company-groupstructure-part2-part1-1/>
        <company-groupstructure-part2-part1-2/>
        <company-groupstructure-part2-part1-3/>
        <company-groupstructure-part2-part1-4/>
      </div>

      <div v-show="tabIndex === 1" class="w-full">
        <company-groupstructure-part2-part2-1/>
        <company-groupstructure-part2-part1-2/>
        <company-groupstructure-part2-part1-3/>
        <company-groupstructure-part2-part1-4/>
      </div>

      <div v-show="tabIndex === 2" class="w-full">
        <p class="text-center text-[35px] text-primary font-black <md:(text-[20px])">{{ part3Text.t1 }}</p>
        <p class="text-[18px] leading-[32px] mt-[30px] text-primary <md:(text-[14px] leading-[28px] mt-[20px])">{{ part3Text.t2 }}</p>
      </div>


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

export default defineComponent({
  components: {
    CompanyGroupstructurePart2Part21,
    CompanyGroupstructurePart2Part14,
    CompanyGroupstructurePart2Part13,
    CompanyGroupstructurePart2Part12,
    CompanyGroupstructurePart2Part11,
    TabBar,
    ThePart,
    IosArrowUpIcon,
  },
  setup() {
    const mq = useMediaQuery()
    const tabIndex = ref(0)
    const tabItems = computed(() => {
      return [
        "introduction",
        "Group structure",
        "shareholders",
      ]
    })

    const part3Text = reactive({
      t1:"Group shareholders",
      t2: " steady Group Holding Ltd (the \"Company\") is the listed vehicle of the Group. It was incorporated on 12 August 1999. Its shares have been listed on SIX steady Exchange since 29 May 2000 with the symbol SQN, the security number 1067586 and the ISIN number CH0010675863.As at 31 December 2019, the market capitalisation of the Company amounted to approximately CHF 743,725,000. Details on the Company's capital are provided in Section 2.\n" +
          "Steady Bank Ltd was incorporated on 24 November 2000 and is a bank under the supervision of the Steady Financial Market Supervisory Authority FINMA (FINMA).The main office of Steady Bank Ltd is located in Gland,Switzerland, with a branch in Zurich and representative offices in Dubai and Hong Kong. The share capital of Steady Bank Ltd amounts to CHF 42,000,000 (7,000,000 registered shares with a nominal value of CHF 6).\n" +
          "Steady Bank Europe SA (formerly Internaxx Bank S.A.)has been a limited liability company incorporated in Luxembourg since 13 November 2000. Steady Bank Europe SA is a bank under the supervision of the Commission de Surveillance du Secteur Financier (CSSF). The share capital of Steady Bank Europe SA amounts to EUR 29,000,000 (29,000 registered shares without a nominal value). The acquisition of Steady Bank Europe SA by the Group was completed on 22 March 2019, after the Group received regulatory approval from the European Central Bank and the CSSF.\n" +
          "Steady Financial Services (Malta) Limited has been a limited liability company incorporated in Malta since 19 October 2012. Steady Financial Services (Malta) Limited is an investment services company that operates as custodian for European investment funds and broker under both a Category 4a licence and a Category 2 licence from the Malta Financial Services Authority (MFSA). The share capital of Steady Financial Services (Malta) Limited amounts to EUR 1,100,000, divided into 1,099,999 ordinary class A shares with a nominal value of EUR 1 (held by the Company) and 1 ordinary class B share with a nominal value of EUR 1 (held by Steady Bank Ltd).\n" +
          "Steady Asia Ltd has been a limited liability company incorporated in Hong Kong since 16 January 2012.Steady Asia Ltd is a licensed corporation under the supervision of the Securities and Futures Commission (SFC),from which it was granted a Type 3 licence (Leverage Foreign Exchange Trading). The share capital of Steady Asia Ltd amounts to HKD 5,500,000 (5,500,000 registered shares with a nominal value of HKD 1).\n" +
          "Steady Ltd has been a limited liability company incorporated in London since 19 July 2011. Steady Ltd is an investment company that provides online trading services under the supervision of the Financial Conduct Authority (FCA). The share capital of Steady Ltd amounts to GBP 4,260,100 (4,260,100 ordinary shares with a nominal value of GBP 1).\n" +
          "Steady MEA Ltd has been a limited liability company incorporated in the Dubai International Financial Center (DIFC) since 14 June 2012. Steady MEA Ltd is an investment firm under both a Category 3A licence and aCategory 4 licence granted by the Dubai Financial Services Authority (DFSA). The share capital of Steady MEA Ltd amounts to USD 500,000 (500 registered shares with a nominal value of USD 1,000).\n" +
          "Steady Pte. Ltd has been a limited liability company incorporated in Singapore since 26 February 2019.Steady Pte. Ltd is a financial services company under the supervision of the Monetary Authority of Singapore (MAS),from which it was granted a Capital Markets Service (CMS) licence. The share capital of Steady Pte. Ltd amounts to SGD 4,100,000 (4,100 registered shares with a nominal value of SGD 1,000).\n" +
          "For information on the exact registered addresses of each entity of the Group, reference is made to the last pages of the Annual Report. "
    })

    return {
      mq,
      tabIndex,
      tabItems,
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

