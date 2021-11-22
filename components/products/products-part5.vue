<template>
  <the-part
      background-color="#FAFAFA"
  >
    <div
        class="
          <md:(flex-col pt-[30px])
          pb-[60px] pt-[73px]
          bg-cover flex flex-col items-center page-content
        "
    >

      <div class="flex w-full flex-row <md:(flex-col)">

        <div
            style="box-shadow: 0px 89.761px 145.862px rgba(0, 0, 0, 0.05);"
            class="w-[426px] <md:(w-full) flex-shrink-0 flex flex-col relative relative"
        >
          <!--          左上角  -->
          <div class="h-[80%] w-[50%] absolute top-[-12px] left-[-12px] z-1 bg-[#3ADAD9]"/>
          <!--         右下角   -->
          <div class="h-[20%] w-[20%] absolute bottom-[-12px] right-[-12px] z-1 bg-[#FED369]"/>

          <img src="/products/part5/person.png" class="relative z-2 w-full" alt="">

          <div class="relative z-2 flex flex-col bg-white py-[16px] px-[20px]">
            <div class="flex flex-col">
              <p class="text-[17px] text-[#3C405F]">{{ cardData.t1 }}</p>
              <p class="pt-[10px] text-[17px] text-[#3C405F]">{{ cardData.t2 }}</p>
            </div>

            <div class="pt-[30px] flex flex-row justify-between text-blue text-[16px] leading-[160%]">
              <div class="flex flex-col">
                <p>{{ cardData.Followers }}</p>
                <p>Followers</p>
              </div>
              <div class="flex flex-col">
                <p>{{ cardData.TotalPL }}</p>
                <p>Total P/L</p>
              </div>
              <div class="flex flex-col">
                <p>{{ cardData.AvailableBalance }}</p>
                <p>Available Balance</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full pl-[102px] <md:(pl-0 mt-[30px])">
          <p class="text-[35px] text-primary font-black <md:(text-[20px] leading-[20px])">{{ text.t1 }}</p>
          <p class="whitespace-pre-line text-primary pt-[30px] text-[18px] leading-[32px] <md:(text-[14px] leading-[20px])">
            {{ text.t2 }}</p>
        </div>

      </div>

      <div class="mt-[46px] w-full flex flex-row justify-between <md:(flex-col)">
        <div
            v-for="(item, index) of peoples"
            :key="index"
            class="max-w-[255px] w-[24%] <md:(w-full max-w-none mt-[20px]) bg-white flex flex-col items-center"
        >
          <img
              class="w-full"
              :src="item.image" alt="">
        </div>
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
import TheStpes from "~/components/the-stpes.vue";

export default defineComponent({
  components: {
    TheStpes,
    ThePart,
    BluePointer
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Top trading team—Jan Thomson",
      t2: "Jan Thomson is from London, England, and has more than 20 years of trading experience as a senior trader in some of the largest fund companies in Europe. Because of his trading talent, he successfully joined a British hedge fund that mainly trades gold. With years of experience in developing a series of custom technical risk indicators, and focusing on G7 gold to impulse trading, the average return rate of the fund he manages exceeded 162% in 10 years, with a compound interest rate of 1800%. If 10 years ago, you Invested 10,000 US dollars in his fund...\n" +
          "\n" +
          "Jan Thomson is now a senior trader in the team at SteadyOption, earning an average of about 12% of revenue for customers every month."
    })

    const peoples = reactive([
      {
        name: "Fahim Rahman",
        mentions: "@rahman",
        image: "/products/part5/Card01.png"
      },
      {
        name: "Kazi Rahman",
        mentions: "@Rahman",
        image: "/products/part5/Card02.png"
      },
      {
        name: "Masterero Ali",
        mentions: "@Master",
        image: "/products/part5/Card03.png"
      },
      {
        name: "Alia Karon",
        mentions: "@Alia",
        image: "/products/part5/Card04.png"
      },
    ])

    const cardData = reactive({
      t1: "Previous month’s ROL:12.07%",
      t2: "Total ROL:56.18%",
      Followers: "1349",
      TotalPL: "$1325012",
      AvailableBalance: "$2358455",
    })

    return {
      mq,
      text,
      peoples,
      cardData
    }
  }
})

</script>

<style lang="scss">


</style>

