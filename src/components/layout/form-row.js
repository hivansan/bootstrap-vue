import { defineComponent } from '../../utils/vue'
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: {
    type: String,
    default: 'div'
  }
}

// @vue/component
export const BFormRow = /*#__PURE__*/ defineComponent({
  name: 'BFormRow',
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'form-row'
      }),
      children
    )
  }
})
