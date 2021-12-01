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
        >
          {{ text.t4 }}
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
          
        >
          {{ text.t10 }}
        </p>
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t11 }}
        </h5>
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
          
        >
          {{ text.t12 }}
        </p>
         <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t13 }}
        </h5>
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
          
        >
          {{ text.t14 }}
        </p>
         <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t15 }}
        </h5>
        
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
           v-for="item of text.t16"  :key="item"
        >
          {{ item }}
        </p>
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t17 }}
        </h5>
        
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
           v-for="item of text.t18"  :key="item"
        >
          {{item}}
        </p>
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t19 }}
        </h5>
        
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px]"
           v-for="item of text.t20"  :key="item"
        >
          {{ item }}
        </p>
        <h5 class="pt-[30px] text-primary text-[35px] font-black">
          {{ text.t21 }}
        </h5>
        <p
          class="<md:(w-auto) pt-[30px] leading-[32px] text-primary text-[18px] pb-[20px]"
           v-for="item of text.t22"  :key="item"
        >
          {{ item }}
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
      t1: "Terms of service",
      t2: "Please find below a comprehensive list of the Terms and Conditions related to the use of our website(s). It is important that you make yourself aware of these and agree to them before using our website(s). ",
      t3: "Please read these terms and conditions carefully before using this site",
      t4: "These terms outline the rules for using our website(s) www.steadyoption.net , including any language sites (collectively, ‘Our site’). ",
      t5: "By using our site you accept these terms",
      t6: [
        "By using our site you confirm that you accept these terms of use and you agree to comply with them. If you do not agree with these terms you may not use our site and our services.",

        "By continuing to use this site you consent to all the information provided to you in English language (including marketing and other material) unless you have chosen and/or accepted to receive information in more than one language.",

        "Further, by continuing to use the site you consent that the information provided via the site is in a medium, considered as ‘durable medium’, and you agree that due to the nature of the services we offer (i.e. online services) information found online is considered as being in durable form."],
      t7: "There are other terms that may apply to you",
      t8: [
        "The following terms of use also apply when using our site:",
        "Our Privacy Policy found here sets out the terms on which we process any personal data that is collected from you and/or provided to us. By using our site you consent to such processing and you guarantee that all data provided by you is accurate.",
        "Our Cookie Disclosure Notice found here sets out information about the cookies on our site. Our Client Agreement and other client legal documentation is found here. "
      ],
      t9: "There are other terms that may apply to you",
      t10: "The following terms of use also apply when using our site: ",
      t11:"We may make changes to these terms",
      t12:"We may amend these terms from time to time. Every time you wish to use our site please check these terms to ensure you understand the terms that apply at that particular time. ",
      t13:"We may make changes to our site",
      t14:"We may update and change our site from time to time. You can find the most up-to-date version of these terms on our site.",
      t15:"We may suspend or withdraw our site",
      t16:["Our site is made available free of charge.",

            "We do not guarantee that our site (including any content and links) will always be available or uninterrupted. We may suspend, withdraw or restrict the availability of of our site or a part of it for business, operational or other reasons. We will try to give you reasonable notice of any suspension or withdrawal.",

            "Any person accessing our site shall be made aware of these terms of use and other applicable terms and conditions.",

            "OUR SITE IS NOT FOR USERS in certain countries. There may also be instances where the site may be available in countries which prohibit the use of this site. In this case, it is the responsibility of the visitor to ensure that the site complies with any local laws or regulations to which they may be subject to. We do not guarantee that the content available on our site is appropriate for use in the location and jurisdiction where this site is accessible. "],
      t17:"You must keep your account details safe",
      t18:[
          "If you choose or you are provided with a user identification code, password or any other piece of information as part of our security procedures you must treat such information as confidential. You must not disclose it to any third party.",

          "We have the right to disable any user identification code or password whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these terms of use.",

          "If you know or suspect that anyone other than you knows your user identification code or password you must promptly notify us."
      ],
      t19:"How you may use material on our site",
      t20:["We are the owner or the licensee of all intellectual property rights on our site as well as the material published on it including any copyright, database rights and trade marks. Any such right not belonging to us belongs to third parties whom we have obtained their approval for use and are protected by copyright laws and treaties around the world. All such rights are reserved.",

          "Our site contains both public and client areas. The client area is only accessible to clients who have opened an account with us and have been given access to our trading and other platforms.",

          "You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way and you must not use any information or material found on the site in any way. Material on our site is intellectual property belonging to us and you have no right on any such material.",

          "You must not use any part of the content on our site for commercial or any other purpose without obtaining a licence from us or our licensors.",

          "If you print off, copy or download any part of our site in breach of these terms of use we may take the respective action as we deem appropriate. "],
      t21:"Do not rely on information on this site",
      t22:["The content on our site is provided for general information only. It is not intended for advice on which you should rely on. Please obtain professional or specialist advice before taking or refraining from any action on the basis of the content on our site.",

          "Although we make reasonable efforts to update the information on our site we do not guarantee that the content on our site is accurate, complete or up to date. "],
     
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

