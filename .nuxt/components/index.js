export { default as BaseButton } from '../..\\components\\BaseButton.vue'
export { default as BaseCard } from '../..\\components\\BaseCard.vue'
export { default as BaseTag } from '../..\\components\\BaseTag.vue'
export { default as FeaturedProduct } from '../..\\components\\FeaturedProduct.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as MainResult } from '../..\\components\\MainResult.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as ProductItem } from '../..\\components\\ProductItem.vue'
export { default as ReviewItem } from '../..\\components\\ReviewItem.vue'
export { default as ReviewSection } from '../..\\components\\ReviewSection.vue'
export { default as Search } from '../..\\components\\Search.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
