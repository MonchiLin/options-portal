<template>
  <the-part
      background-for-md="url(/index/part5/background_mobile.png)"
      background="url(/index/part5/background.png)"
  >
    <div
        class="
          <md:(h-auto py-[23px])
          h-[900px] py-[30px]
          flex items-center page-content flex-col
        "
    >

      <p class="<md:(text-[20px]) text-[35px] font-black text-white">
        {{ text.t1 }}
      </p>

      <p class="<md:(text-[14px]) text-[18px] pt-[18px] text-white">
        {{ text.t2 }}
      </p>

      <part5-card-box class="mt-[30px]" :configs="cardData"/>

      <pagintion class="mt-[20px]" v-model:page-index="paging.pageIndex" :page-total="paging.pageTotal"/>
    </div>
  </the-part>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useMediaQuery } from "~/utils/shared";
import { reactive } from "vue";
import ThePart from "~/components/the-part.vue";
import Part5Card from "~/components/index/part5/part5-card.vue";
import Part5CardBox from "~/components/index/part5/part5-card-box.vue";
import Pagintion from "~/components/pagintion.vue";
// import { ElCarousel, ElCarouselItem } from "element-plus/lib/components/carousel";

export default defineComponent({
  components: {
    Pagintion,
    Part5CardBox,
    Part5Card,
    ThePart,
    // ElCarousel,
    // ElCarouselItem
  },
  setup() {
    const mq = useMediaQuery()
    const text = reactive({
      t1: "Popular financial products",
      t2: "Partners for wealth creation",
    })

    const p = [
      {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
      {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
      {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
      {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
      {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
      {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
      {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
      {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
      {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
      {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
    ]

    const cardData = [
      {
        "annualEarnings": 108,
        t1: "Annual earnings 108.00%+",
        t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
        descriptions: [
            "Free experience",
            "Experience period of funds: 4 days",
            "Buy today, pay tomorrow (first profit)",
            "All revenue goes to the user"
        ]
      }, {
        "annualEarnings": 84,
        t1: "Annual earnings 108.00%+",
        t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
        descriptions: [
            "Start at Rs 30,000",
            "The lockup period is 1 month",
            "Buy today, pay tomorrow (first profit)",
            "Risk type: Low risk"
        ]
      }, {
        "annualEarnings": 48,
        t1: "Annual earnings 108.00%+",
        t2: "Flexible financial management, suitable for users who like to invest in a short period of time, and can end orders in their positions at any time!",
        descriptions: [
            "Start at Rs 1,000",
            "The lockup period is 1 month",
            "Buy today, pay tomorrow (first profit)",
            "Risk type: Low risk"
        ]
      },
      {
        "annualEarnings": 108,
        t1: "Annual earnings 108.00%+",
        t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
        descriptions: [
          "Free experience",
          "Experience period of funds: 4 days",
          "Buy today, pay tomorrow (first profit)",
          "All revenue goes to the user"
        ]
      },
      {
        "annualEarnings": 108,
        t1: "Annual earnings 108.00%+",
        t2: "The best choice of spare money investment, income every day to account, investment cycle for a month",
        descriptions: [
          "Free experience",
          "Experience period of funds: 4 days",
          "Buy today, pay tomorrow (first profit)",
          "All revenue goes to the user"
        ]
      },
    ]

    const paging = reactive({
      pageIndex: 1,
      pageTotal: 4
    })

    return {
      mq,
      text,
      p,
      cardData,
      paging
    }
  }
})

</script>

<style lang="scss">

</style>

