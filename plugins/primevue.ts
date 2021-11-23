import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Carousel from 'primevue/carousel';
import Panel from 'primevue/panel';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp
  app.use(PrimeVue, {ripple: true});

  app.component('prime-panel', Panel);
  app.component('prime-carousel', Carousel);
  app.component('prime-accordion', Accordion);
  app.component('prime-accordion-tab', AccordionTab);
  app.use(ToastService);
});
