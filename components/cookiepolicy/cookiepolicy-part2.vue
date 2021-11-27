<template>
  <the-part background-color="#F5F5F5">
    <div
      class="
        h-[48px]
        w-[100%]
        bc[]
        justify-between
        bg-cover
        flex
        items-center
        page-content
      "
    >
      <h5 class="text-[14px] ht-[48px] <md:(text-[14px] ht-[48px])">
        <a href="/">Home</a>/<a class="text-blue">{{ text.t1 }}</a>
      </h5>
    </div>
  </the-part>
  <the-part>
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
      <div class="<md:(pt-[20px] justify-start) flex flex-col justify-evenly">
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
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
          v-for="item of text.t4"
          :key="item"
        >
          {{ item }}
        </p>
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t5 }}
        </h5>
       <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
          v-for="item of text.t6"
          :key="item"
        >
          {{ item }}
        </p>
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t7 }}
        </h5>
        
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
          v-for="item of text.t8"
          :key="item"
        >
          {{ item }}
        </p>
        
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t9 }}
        </h5>
        
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
          v-for="item of text.t10"
          :key="item"
        >
          {{ item }}
        </p>
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t11 }}
        </h5>
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
          
        >
          {{ text.t12 }}<a class="text-blue">{{siteInfo.shortDomain}}</a>
        </p>
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
          v-for="item of text.t13"
          :key="item"
        >
          {{ item }}
        </p>
         <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t14 }}
        </h5>
        
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px] pb-[20px]"
          
        >
          {{ text.t15 }}<a class="text-blue">{{siteInfo.siteEmail}}</a>
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
      t1: "Cookie Policy",
      t2: " We respect your privacy and we are committed to ensuring that you are adequately informed on how you can manage your cookies.",
      t3: "What are Cookies?",
      t4: [
        "Cookies are small data files. When you visit a website, the website sends the cookie to your computer. Your computer stores it in a file located inside your web browser.",
        "Cookies do not transfer viruses or malware to your computer. Because the data in a cookie does not change when it travels back and forth, it has no way to affect how your computer runs, but they act more like logs (i.e. they record user activity and remember stateful information) and they get updated every time you visit a website.",
        "We may obtain information about you by accessing cookies, sent by our website. Different types of cookies keep track of different activities. For example, session cookies are used only when a person is actively navigating a website. Once you leave the website, the session cookie disappears. For a more detailed list of cookies we use, please read the relevant section below.",
      ],
      t5: "Why are Cookies Useful?",
      t6: [
        "We use functional cookies to analyse how visitors use our website, as well as track and improve our website’s performance and function. This allows us to provide a high-quality customer experience by quickly identifying and fixing any issues that may arise. For example, we might use cookies to keep track of which website pages are most popular and which method of linking between website pages is most effective. The latter also helps us to track if you were referred to us by another website and improve our future advertising campaigns.",
        "Another use of cookies is to store your log in sessions, meaning that when you log in to the Members Area to deposit funds, a \"session cookie\" is set so that the website remembers that you have already logged in. If the website did not set this cookie, you will be asked for your login and password on each new page as you progress through the funding process.",
        "In addition, functional cookies, for example, are used to allow us to remember your preferences and identify you as a user, ensure your information is secure and operate more reliably and efficiently. For example, cookies save you the trouble of typing in your username every time you access our trading platform, and recall your preferences, such as which language you wish to see when you log in. "
      ],
      t7: "Here is an overview of some of the functions our cookies provide us with:",
      t8: [
        "Verifying your identity and detecting the country you are currently visiting from",
        "Checking browser type and device",
        "racking which site the user was referred from",
        "Allowing third parties to customize content accordingly",
      ],
      t9: "Type of Cookies We Use",
      t10: [
        "Functional cookies: These cookies are essential for the running of our website. Without these cookies our websites would not function properly. These are saved temporarily as login information and expire once the browser is closed.",
        "ytical cookies: The information provided by analytical cookies allows us to analyse patterns of visitor behaviour and we use that information to enhance the overall experience or identify areas of the website which may require maintenance. The information is anonymous (i.e. it cannot be used to identify you and does not contain personal information such as your name and email address) and it is only used for statistical purposes. Behavioral cookies are similar to analytical and remember that you have visited a website and use that information to provide you with content which is tailored to your interests.",
        "Promotional cookies: These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
        "Preferences cookies: Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in."
      ],
      t11:"Manage Cookies",
      t12:"You can delete cookies any time you want by using the settings in your web browser. You can also choose to disable cookies from your web browser, but this would mean that our website and other websites may not function properly if you do this, and as a result you may not be able to sign in. Further information on deleting or controlling cookies can be found at ",
      t13:[
        
        "Do Not Track (DNT) browser setting",
        "DNT is a feature offered by some browsers which, when enabled, sends a signal to websites to request that your browsing is not tracked, such as by third party ad networks, social networks and analytic companies. This website does not currently respond to DNT requests.",
      ],
      t14:"Additional Information",
      t15:"If you have any specific questions or concerns about cookies, please contact",
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

