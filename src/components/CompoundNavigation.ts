import { inject, ref, h, VNode, reactive } from 'vue'

import { defaultConfigs } from '@/partials/defaults'
import { mapNumberToRange } from '@/utils'

import { CarouselConfig, CarouselNav } from '../types'

import Icon from './Icon'

const CompoundNavigation = (props: any, { slots, attrs }: any) => {
  const maxSlide = inject('maxSlide', ref(1))
  const minSlide = inject('minSlide', ref(1))
  const currentSlide = inject('currentSlide', ref(1))
  const nav: CarouselNav = inject('nav', {})
  const { next: slotNext, prev: slotPrev } = slots || {}
  const config: CarouselConfig = inject('config', reactive({ ...defaultConfigs }))

  const { dir, wrapAround } = config
  const isRTL = dir === 'rtl'

  const isActive = (slide: number): boolean =>
    mapNumberToRange({
      val: currentSlide.value,
      max: maxSlide.value,
      min: 0,
    }) === slide

  const children: Array<VNode> = []
  for (let slide = minSlide.value; slide < maxSlide.value + 1; slide++) {
    const button = h('button', {
      type: 'button',
      class: {
        'carousel__pagination-button': true,
        'carousel__pagination-button--active': isActive(slide),
      },
      'aria-label': `Navigate to slide ${slide + 1}`,
      onClick: () => nav.slideTo(slide),
    })
    children.push(h('li', { class: 'carousel__pagination-item', key: slide }, button))
  }
  const pagination = h('ol', { class: 'carousel__pagination' }, children)

  const prevButton = h(
    'button',
    {
      type: 'button',
      class: [
        'carousel__prev',
        !wrapAround && currentSlide.value <= minSlide.value && 'carousel__prev--disabled',
        attrs?.class,
      ],
      'aria-label': `Navigate to previous slide`,
      onClick: nav.prev,
    },
    slotPrev?.() || h(Icon, { name: isRTL ? 'arrowRight' : 'arrowLeft' })
  )
  const nextButton = h(
    'button',
    {
      type: 'button',
      class: [
        'carousel__next',
        !wrapAround && currentSlide.value >= maxSlide.value && 'carousel__next--disabled',
        attrs?.class,
      ],
      'aria-label': `Navigate to next slide`,
      onClick: nav.next,
    },
    slotNext?.() || h(Icon, { name: isRTL ? 'arrowLeft' : 'arrowRight' })
  )

  return h('div', { class: 'carousel__compound-navigation' }, [
    prevButton,
    pagination,
    nextButton,
  ])
}

export default CompoundNavigation
