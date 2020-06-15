import { defineComponent } from '../../utils/vue'
import { mergeData } from 'vue-functional-data-merge'
import { htmlOrText } from '../../utils/html'
import { copyProps, prefixPropName } from '../../utils/props'
import cardMixin from '../../mixins/card'

// --- Props ---

export const props = {
  ...copyProps(cardMixin.props, prefixPropName.bind(null, 'footer')),
  footer: {
    type: String
    // default: null
  },
  footerHtml: {
    type: String
    // default: null
  },
  footerClass: {
    type: [String, Object, Array]
    // default: null
  }
}

// --- Main component ---
// @vue/component
export const BCardFooter = /*#__PURE__*/ defineComponent({
  name: 'BCardFooter',
  functional: true,
  props,
  render(h, { props, data, children }) {
    const { footerBgVariant, footerBorderVariant, footerTextVariant } = props

    return h(
      props.footerTag,
      mergeData(data, {
        staticClass: 'card-footer',
        class: [
          props.footerClass,
          {
            [`bg-${footerBgVariant}`]: footerBgVariant,
            [`border-${footerBorderVariant}`]: footerBorderVariant,
            [`text-${footerTextVariant}`]: footerTextVariant
          }
        ],
        domProps: children ? {} : htmlOrText(props.footerHtml, props.footer)
      }),
      children
    )
  }
})
