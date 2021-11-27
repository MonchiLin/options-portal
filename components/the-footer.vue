<template>
  <the-part background-color="#0B0D17">
    <footer
      class="
        <md:(flex-col justify-start)
        flex-row pt-[34px] pb-[52px]
        page-content flex text-white justify-between
      "
    >

      <!--    left -->
      <div class="<md:(w-auto) w-[697px] flex flex-col">
        <img :src="siteInfo.siteDomain+siteInfo.siteLogo" class="<md:self-center w-[32px] h-[32px]" alt="">
        <p class="text-[14px] leading-[26px] mt-[24px]">{{ leftText.t1 }}</p>
      
      </div>

      <!--  right  -->

      <div class="flex flex-col <md:(mt-40px)">
        <a :href="siteInfo.androidUrl">
        <button
           
            class="w-[198px] bg-orange rounded-[10px] border-1 border-white flex flex-row items-center justify-center py-[12px]">
          <img class="w-[22px] h-[22px]" src="/the-footer/download.png" alt="">
          <span class="pl-[12px] text-[18px]">{{ rightText.t1 }}</span>
        </button>
        </a>
        <a :href="siteInfo.webDomain">
        <button
          
            class="w-[198px] bg-transparent mt-[20px] rounded-[10px] border-1 border-white flex flex-row items-center justify-center py-[12px]">
          <img class="w-[22px] h-[22px]" src="/the-footer/OpenAccount.png" alt="">
          <span class="pl-[12px] text-[18px]">{{ rightText.t2 }}</span>
        </button>
        </a>
        <div class="mt-[10px] flex flex-col">
          <a
            v-for="item of rightText.links"
            :key="item.label"
            class="text-[#D9DBE1] leading-[24px] text-[14px] pt-[12px]"
            :href="item.link"
          >
            {{ item.label }}
          </a>
        </div>

      </div>

    </footer>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {ThePart},
  props: {
    siteInfo: Object
  },
 setup(props) {
    const mq = useMediaQuery()

    
    const rightText = reactive({
      t1: "Download App",
      t2: "Open Account",
      links: [
        {label: "FAQ", link: "/company/faq/"},
        // {label: "Privarcy Policy", link: "/"},
        // {label: "Cookie Policys", link: "/"},
        // {label: "Terms of service", link: "/"},
      ]
    })
    const siteInfo=props.siteInfo
    const leftText = reactive({
      t1: siteInfo.corpName+" is authorized and regulated in various jurisdictions.\n" +
          "Risk Warning: Investment is at risk.You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Before trading, please take into consideration your level of experience, investment objectives and seek independent financial advice if necessary. It is the responsibility of the Client to ascertain whether he/she is permitted to use the services of the Steady Group based on the legal requirements in his/her country of residence. Please read Steady Group full Risk Disclosure. ",
     
    })

    const onClickDownload = () => {

    }

    const onClickOpenAccount = () => {

    }
 

    return {
      mq,
      leftText,
      rightText,
      siteInfo,
      onClickDownload,
      onClickOpenAccount
    }
  }
})

</script>
