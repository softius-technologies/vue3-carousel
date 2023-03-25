<template>
  <Carousel>
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <CompoundNavigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, CompoundNavigation, Slide } from '../../dist/carousel.es'

import '../../dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    CompoundNavigation,
  },
})
</script>
