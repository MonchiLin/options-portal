<template>
  <the-part
    background-for-md="/index/background_1_mobile.jpg"
    background="/index/background_1.png"
  >
    <div
      class="
        <md:(flex-col
        pb-[34px]
        h-[700px]
        justify-start
        pt-[87px])
        h-[600px]
        justify-between
        flex-row
        page-content
        flex
        items-center
        text-white
      "
    >
      <img src="/index/meeting.png" class="<md:w-[300px] w-[460px]" alt="" />

      <div class="<md:(items-center pt-[30px]) items-end flex flex-col">
        <div
          class="
            <md:(text-[34px]
            text-center
            leading-[40px]
            w-[334px])
            text-right
            leading-[75px]
            text-[44px]
            font-black
          "
        >
          <p>{{ text.t1 }}</p>
          <p>{{ text.t2 }}</p>
        </div>
        <p
          class="
            <md:(pt-[35px]
            text-[14px]
            w-[238px]
            leading-[24px]
            text-center) text-[18px]
            opacity-80
            pt-[11px]
            text-[18px]
          "
        >
          {{ text.t3 }}
        </p>

        <a :href="siteInfo.webDomain+'/#/projectList'">
          <button
            class="
              <md:(mt-[30px])
              mt-[46px]
              w-[163px]
              h-[48px]
              bg-orange
              rounded-[6px]
            "
          >
            {{ text.t4 }}
          </button>
        </a>
      </div>
    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import TheHeader from "~/components/the-header.vue";
import TheFooter from "~/components/the-footer.vue";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";

export default defineComponent({
  components: { ThePart },
  props: {
    siteInfo: Object
  },
  async setup(props) {
    const siteInfo=props.siteInfo;
    const mq = useMediaQuery();
    const text = reactive({
      t1: siteInfo.siteName,
      t2: "Partners for wealth creation",
      t3: "Choose the right platform and you are half the battle",
      t4: "Invest now",
    });
    
   
    return {
      mq,
      text,
      siteInfo
    };
  },
});
</script>
