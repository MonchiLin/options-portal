<template>
  <the-part background-color="#F5F5F5">
    <div  class="
        h-[48px] w-[100%] bc[] justify-between
        bg-cover
        flex
        items-center
        page-content"
      >
           <h5 class="text-[14px] ht-[48px]  <md:(text-[14px] ht-[48px])">
          
              <a href="/">Home</a>/<a class="text-blue" >{{ text.t1 }}</a>
        </h5>
    </div>
  </the-part>
  <the-part >
    
    <div
      class="
        <md:(flex-col
        pb-[34px]
        h-auto
        justify-start) justify-between
        bg-cover
        flex
        items-center
        page-content
      "
    >
    
      <div class="<md:(pt-[20px]  justify-start) flex flex-col justify-evenly">
        
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          
          {{ text.t1 }}
        </h5>
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
        >
          {{ text.t2 }}
        </p>
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t3 }}
        </h5>
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]" v-for="item of text.t4"
            :key="item"
        >
          {{ item }}
        </p>
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t5 }}
        </h5>
        <p
          class="
            <md:(w-auto)
            pt-[30px]
            w-[631px]
            leading-[32px]
            text-primary text-[18px]
          "
        >
          {{ text.t6 }}
        </p>

        <ul class="mt-[30px] text-secondary font-medium">
          <li
            v-for="item of text.t7"
            :key="item"
            class="flex flex-row items-center"
          >
            <div class="h-full self-start mt-[3px]">
              <blue-pointer />
            </div>
            <span class="pl-[12px]">{{ item }}</span>
          </li>
        </ul>
        <p
          class="
            <md:(w-auto)
            pt-[30px]
            w-[631px]
            leading-[32px]
            text-primary text-[18px]
          "
           v-for="item of text.t8"
            :key="item"
        >
          {{ item }}
        </p>
        <ul class="mt-[30px] text-secondary font-medium">
          <li
            v-for="item of text.t9"
            :key="item"
            class="flex flex-row items-center"
          >
            <div class="h-full self-start mt-[3px]">
              <blue-pointer />
            </div>
            <span class="pl-[12px]">{{ item }}</span>
          </li>
        </ul>
        <p
          class="
            <md:(w-auto)
            pt-[30px]
            pb-[20px]
            w-[631px]
            leading-[32px]
            text-primary text-[18px]
          "
          
        >
          {{ text.t10 }}
        </p>
      </div>
    </div>
    
  
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import BluePointer from "../blue-pointer.vue";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: {
    ThePart,
    BluePointer,
  },
  props: {
    siteInfo: Object,
  },
  setup(props) {
    const siteInfo = props.siteInfo;
    const mq = useMediaQuery();
    const text = reactive({
      t1: "Privacy Policy",
      t2: "Our Privacy Policy below describes in detail how "+siteInfo.siteName+" Trade handles the collection, management and protection of all confidential user information. ",
      t3: "Introduction",
      t4: ["Your privacy is very important to us. We are committed to protecting and respecting your personal data. This Privacy Policy describes what types of personal data we collect about you when you choose to use our services, how we will use your personal data, when and with whom we share it and how we will keep it safe. It also details your rights in respect of our processing of your personal information and how you may exercise them. Please take the time to read and understand this policy.",

      "We may make changes to this Notice from time to time and it is important that you check this Notice for any updates. Any personal information we hold will be governed by the current privacy notice at the given time. If we make changes we consider to be important, we will communicate them to you.",

      "Please note that this notice is addressed to customers and potential customers. If you are an "+siteInfo.siteName+" Trade employee, a contractor to "+siteInfo.siteName+" Trade or a third-party service provider, your personal information will be used in connection with your employment contract, your contractual relationship or in accordance with our separate policies which are available by contacting us.",

      "Any reference to ‘us’, ‘our’, ‘we’ or ‘"+siteInfo.siteName+"-option’ in this privacy notice is a reference to each group company within the "+siteInfo.siteName+" Trade Group as the context requires unless otherwise stated.",

      "Similarly, any reference to ‘you’, ‘your’, ‘yours’ or ‘yourself’ in this privacy notice is a reference to any of our customers and potential customers as the context requires unless otherwise stated.",

      "By accessing our websites, including using any of the communication channels to contact us, we consider that you have read and understood the terms of this notice and how we process any information you disclose to us including personal data prior to becoming a client. Once you open an account with us you agree that this notice, including any amendments, will govern how we collect, store, use, share and in any other form process your personal data and your rights during our business relationship and after its termination.",
      ],
      t5: "What kind of personal information do we collect and store?",
      t6: "As part of our business we collect personal data from customers and potential customers that include the following:",
      t7: [
        "Name, Surname and contact details ",
        "Date of birth and gender ",
        "Information about your income and wealth including details about your assets and liabilities, account balances, trading statements, tax and financial statements ",
        "Profession and employment details ",
        "Location data ",
        "Knowledge and experience in trading, risk tolerance and risk profile",
        "IP address, device specifications and other information relating to your trading experience ",
        "Bank account, e-wallets and credit card details ",
      ],
      t8:[
        "Details of your visits to our Website or our Apps including, but not limited to, traffic data, location data, weblogs and other communication data.",
        "We use cookies to store and collect information about your use of our Website. Cookies are small text files stored by the browser on your equipment’s hard drive. They send information stored on them back to our web server when you access our Website. These cookies enable us to put in place personal settings and load your personal preferences to improve your experience. You can find out more about our cookies on our “Cookies Policy” available on our Website.",
        "We also keep records of your trading behaviour, including a record of:",
      ],
       t9: [
        "Name, Surname and contact details ",
        "Date of birth and gender ",
        "Information about your income and wealth including details about your assets and liabilities, account balances, trading statements, tax and financial statements ",
        "Profession and employment details ",
        "Location data ",
        "Knowledge and experience in trading, risk tolerance and risk profile",
        "IP address, device specifications and other information relating to your trading experience ",
        "Bank account, e-wallets and credit card details ",
      ],
      t10:" We are required by law to identify you if you are opening a new account or adding a new signatory to an existing account. Anti-money laundering laws require us to sight and record details of certain documents (i.e. photographic and non-photographic documents) to meet the standards, set under those laws. Identification documentation, as required under anti-money laundering legislation or other legislation relevant to the services we provide to you includes:"
    });


    
    
    

    return {
      mq,
      text,
      siteInfo,
    };
  },
});
</script>

<style lang="scss">
</style>

