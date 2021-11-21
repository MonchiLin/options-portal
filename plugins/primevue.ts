import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Carousel from 'primevue/carousel';
import Panel from 'primevue/panel';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {ripple: true});

  nuxtApp.vueApp.component('prime-panel', Panel);
  nuxtApp.vueApp.component('prime-carousel', Carousel);
  nuxtApp.vueApp.component('prime-accordion', Accordion);
  nuxtApp.vueApp.component('prime-accordion-tab', AccordionTab);
});
