import {
  defineComponent,
  inject,
  ref,
  h,
  reactive,
  SetupContext,
  computed,
  ComputedRef,
} from 'vue'

import { DEFAULT_CONFIG } from '@/partials/defaults'
import { CarouselConfig } from '@/types'

export default defineComponent({
  name: 'CarouselSlide',
  props: {
    index: {
      type: Number,
      default: 1,
    },
    isClone: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }: SetupContext) {
    const config: CarouselConfig = inject('config', reactive({ ...DEFAULT_CONFIG }))
    const currentSlide = inject('currentSlide', ref(0))
    const slidesToScroll = inject('slidesToScroll', ref(0))
    const isSliding = inject('isSliding', ref(false))
    const slideWidth = inject('slideWidth', ref(0))

    const isActive: ComputedRef<boolean> = computed(
      () => props.index === currentSlide.value
    )
    const isPrev: ComputedRef<boolean> = computed(
      () => props.index === currentSlide.value - 1
    )
    const isNext: ComputedRef<boolean> = computed(
      () => props.index === currentSlide.value + 1
    )
    const isVisible: ComputedRef<boolean> = computed(() => {
      const min = Math.floor(slidesToScroll.value)
      const max = Math.ceil(slidesToScroll.value + config.itemsToShow - 1)

      return props.index >= min && props.index <= max
    })

    const widthStyle: ComputedRef<string> = computed(() => {
      if (config.gap) {
        return `${slideWidth.value}px`
      }
      return `${100 / config.itemsToShow}%`
    })

    return () =>
      h(
        'li',
        {
          style: { width: widthStyle.value },
          class: {
            carousel__slide: true,
            'carousel__slide--clone': props.isClone,
            'carousel__slide--visible': isVisible.value,
            'carousel__slide--active': isActive.value,
            'carousel__slide--prev': isPrev.value,
            'carousel__slide--next': isNext.value,
            'carousel__slide--sliding': isSliding.value,
          },
          'aria-hidden': !isVisible.value,
        },
        slots.default?.({
          isActive: isActive.value,
          isClone: props.isClone,
          isPrev: isPrev.value,
          isNext: isNext.value,
          isSliding: isSliding.value,
          isVisible: isVisible.value,
        })
      )
  },
})
