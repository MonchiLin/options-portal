<template>
  <the-part>
    <div
        class="
          <md:(flex-col pb-[30px] h-auto)
          h-auto pb-[60px]
          flex items-center page-content flex-col index-part3
        "
    >

      <p class="font-black text-[35px]">
        {{ text.t1 }}
      </p>

      <!-- 支持的支付方式列表     -->
      <div class="<md:(mt-[20px]) w-full h-[1px] mt-[30px]"
           style="background: linear-gradient(90deg, rgba(192, 204, 218, 0.1) 0%, rgba(192, 204, 218, 0.6) 50.38%, rgba(192, 204, 218, 0.1) 100%);"/>
      <div
          class="
            <md:(w-full py-[10px])
            w-[800px]
            py-[40px] flex flex-row justify-between
          "
      >
        <img class="<md:(w-[15%]) w-[117px]" v-for="item of paymentKinds" :key="item" :src="item" alt="">

      </div>
      <div class="w-full h-[1px]"
           style="background: linear-gradient(90deg, rgba(192, 204, 218, 0.1) 0%, rgba(192, 204, 218, 0.6) 50.38%, rgba(192, 204, 218, 0.1) 100%);"/>

      <!--      Why Invest in Steadyoption?-->
      <p
          class="
            <md:(text-[20px] mt-[30px])
            text-[35px] mt-[60px]
            text-primary font-black
          "
      >{{ text.t2 }}</p>

      <p
          class="
            <md:(text-[14px] mt-[20px] leading-[20px] whitespace-normal)
            text-[18px] mt-[30px] leading-[32px]
            text-primary whitespace-pre-line text-center
          "
      >
        {{ text.t3 }}
      </p>


      <div
          class="
            <md:(flex-col mt-[20px])
            flex-row justify-between
            flex flex-wrap mt-[30px] w-full relative
          "
      >
        <prime-panel
            class="
              <md:(w-full mb-[10px])
              w-[45%] mb-[30px]
              flex flex-col
            "
            toggleable
            v-model:collapsed="collapseds[index]"
            v-for="(item, index) of features"
            :key="item.label"
        >
          <template #header>
            <div
                class="flex-row flex items-center w-full index-part3-box pt-[2%]"
                @mouseover="toggle(index, false,'desktop')"
                @mouseout="toggle(index, true, 'desktop')"
                @click="toggle(index, undefined, 'mobile')">
              <img
                  class="
                    <md:(w-[33px])
                    w-[66px]
                    flex flex-row items-center
                  "
                  :src="item.icon"/>
              <span class="pb-[2%] <md:pb-[2%] font-medium text-[24px] <md:text-[12px]">{{ item.label }}</span>
            </div>
          </template>

          <div
              style="border-top-left-radius: 0px;border-top-right-radius: 0px;"
              class="flex pt-[10px] relative top-[-10px] flex-row index-part3-box pb-[40px]">
            <div
                class="w-[66px]"
            />
            <div class="flex flex-col justify-between h-[300px]">
              <p class="text-[18px] leading-[32px]">{{ item.description }}</p>
              <img
                  class="
                    <md:()
                    w-[200px]
                    flex flex-row items-center
                  "
                  :src="item.descriptionIcon"/>
            </div>
          </div>

        </prime-panel>
      </div>

    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import isNil from 'lodash-es/isNil'

export default defineComponent({
  components: {
    ThePart,
  },props: {
    siteInfo: Object
  },
  setup(props) {
    const siteInfo=props.siteInfo
    const mq = useMediaQuery()
    const text = reactive({
      t1: "We accept",
      t2: "Why Invest in Steadyoption?",
      t3: "A leading India investment services company. A rich heritage of providing effective financial solutions has made us a trusted partner of over a million people. We provide a wide array of products and services such as distribution of mutual funds & insurance, equity and derivatives, commodity, PMS and financial planning. ",
    })

    const paymentKinds = reactive([
      "/index/part3/Bitcoin.png",
      "/index/part3/MasterCard.png",
      "/index/part3/Skrill.png",
      "/index/part3/Visa.png",
      "/index/part3/poli.png"
    ])
  
    const features = reactive([
      {
        label: "Safe & Secure",
        icon: "/index/part3/Safe.png",
        description: siteInfo.corpName + " is headquartered in Haryana, India, and is subject to the supervision of the Securities and Exchange Board of India and the Central Depository  Services (India)  Limited. Client funds are deposited in a separate secure account at Reserve Bank of India in the India",
        descriptionIcon: "/index/part3/Safe&Secure.png"
      }, {
        label: "Open and transparent",
        icon: "/index/part3/open.png",
        description: siteInfo.siteName+" offers advanced the gateway USES advanced encryption technology of up to 256 bits. Allow each customer to instantly customize the trading strategy, and real-time view of the transaction records. ",
        descriptionIcon: "/index/part3/Openandtransparent.png"
      }, {
        label: "Transaction zero tax",
        icon: "/index/part3/Transaction.png",
        description: "All taxes and fees are borne by the guarantee company of the fund product, making it easier for users to make profits ",
        descriptionIcon: "/index/part3/Transactionzerotax.png"
      }, {
        label: "Fast Execution",
        icon: "/index/part3/Fast.png",
        description: siteInfo.siteName+" provides investors with education on trading strategies and financial markets to clients in need. ",
        descriptionIcon: "/index/part3/FastExecution.png"
      }, {
        label: "World-class team",
        icon: "/index/part3/team.png",
        description: "Founded by traders with more than 30 years of experience, the company manages foreign exchange transactions at major Canadian banks such as Imperial Bank of Canada, Royal Bank of Canada and Bank of Canada.",
        descriptionIcon: "/index/part3/World-classteam.png"
      },
    ])

    const collapseds = reactive(Object.keys(features).reduce((p, c, i) => ({...p, [i]: true}), {}))
    const toggle = (index: number, value?: boolean, source?: 'desktop' | 'mobile') => {
      if (source === "desktop" && !mq.desktop) {
        return
      }
      if (source === "mobile" && !mq.mobile) {
        return
      }
      value = isNil(value) ? !collapseds[index] : value
      Object.keys(collapseds).forEach(key => {
        collapseds[key] = true
      })
      collapseds[index] = value
    }

    return {
      features,
      mq,
      text,
      paymentKinds,
      collapseds,
      toggle
    }
  }
})

</script>

<style lang="scss">
.index-part3-box {
  background: #FFFFFF;
  box-shadow: 14px 22px 52px -12px rgba(127, 127, 127, 0.13);
  border-radius: 14px;
}

.index-part3 {
  .p-panel.p-panel-toggleable .p-panel-header,
  .p-panel .p-panel-content
  {
    padding: 0;
    border: none;
    background-color: white;
  }

  .p-panel-icons {
    display: none;
  }
}

</style>

